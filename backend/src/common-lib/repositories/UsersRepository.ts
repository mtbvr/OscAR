import { pool } from "../config/database.js";
import { NewUserRequestDTO } from "../dto/users/NewUserRequestDTO.js";
import { UserEntity } from "../entity/UsersEntity.js";
import bcrypt from "bcrypt";

export class UserRepository  {
  async findAll(): Promise<UserEntity[]> {
    const result = await pool.query("SELECT * FROM users");
    return result.rows;
  }

  async create(userData: NewUserRequestDTO): Promise<UserEntity> {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const result = await pool.query(
      "INSERT INTO users (email, username, password) VALUES ($1, $2, $3) RETURNING id, username",
      [userData.email, userData.username, hashedPassword]
    );
    return result.rows[0];
  }

  async findByCredentials(email: string): Promise<UserEntity | null> {
    const result = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    if (result.rowCount === 0) {
      return null;
    }

    return result.rows[0];
  }
  
  async findById(userId: string): Promise<UserEntity | null> {
    const result = await pool.query(
      "SELECT * FROM users WHERE id = $1",
      [userId]
    );
    if (result.rowCount === 0) {
      return null;
    }
    return result.rows[0];
  }
};