import { create } from "domain";
import { pool } from "../config/database.js";
import { UserEntity } from "../entity/UsersEntity.js";
import bcrypt from "bcrypt";

export class UserRepository  {
  async findAll(): Promise<UserEntity[]> {
    const result = await pool.query("SELECT * FROM users");
    return result.rows;
  }

  async create(userData: any): Promise<UserEntity> {
    const { email, username, password } = userData;
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await pool.query(
      "INSERT INTO users (email, username, password) VALUES ($1, $2, $3) RETURNING id, username",
      [email, username, hashedPassword]
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
};