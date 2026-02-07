import { PoolClient } from "pg";
import { pool } from "../config/database.js";
import { NewUserRequestDTO } from "../dto/users/NewUserRequestDTO.js";
import { UserEntity } from "../entity/UsersEntity.js";
import bcrypt from "bcrypt";

export class UserRepository  {
  async findAll(): Promise<UserEntity[]> {
    const result = await pool.query("SELECT * FROM users");
    return result.rows;
  }

  async createWithClient(client: PoolClient, userData: NewUserRequestDTO): Promise<UserEntity> {
  const hashedPassword = await bcrypt.hash(userData.password, 10);
    const result = await client.query(
      "INSERT INTO users (email, username, password, id_cultural_center) VALUES ($1, $2, $3, $4) RETURNING id, username",
      [userData.email, userData.username, hashedPassword, userData.id_cultural_center]
    );
    return result.rows[0];
  }

  async findByCredentials(email: string): Promise<UserEntity | null> {
    const result = await pool.query(
      `SELECT 
          u.*,
          COALESCE(json_agg(r.name) FILTER (WHERE r.name IS NOT NULL), '[]') AS rights
      FROM users u
      LEFT JOIN right_user ru ON ru.user_id = u.id
      LEFT JOIN rights r ON r.id = ru.right_id
      WHERE u.email = $1
      GROUP BY u.id`,
      [email]
    );

    if (result.rowCount === 0) {
      return null;
    }

    return result.rows[0];
  }
  
  async findById(userId: string): Promise<UserEntity | null> {
    const result = await pool.query(
      `SELECT 
          u.*,
          COALESCE(json_agg(r.name) FILTER (WHERE r.name IS NOT NULL), '[]') AS rights
      FROM users u
      LEFT JOIN right_user ru ON ru.user_id = u.id
      LEFT JOIN rights r ON r.id = ru.right_id
      WHERE u.id = $1
      GROUP BY u.id`,
      [userId]
    );

    if (result.rowCount === 0) {
      return null;
    }

    const user = result.rows[0];
    return user;
  }
}