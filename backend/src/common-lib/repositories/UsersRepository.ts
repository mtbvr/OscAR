import { create } from "domain";
import { pool } from "../config/database.js";
import { UserEntity } from "../entity/UsersEntity.js";

export const userRepository = {
  async findAll(): Promise<UserEntity[]> {
    const result = await pool.query("SELECT id, email, username, password, created_at, updated_at FROM users");
    return result.rows;
  },

  async create(userData: any): Promise<UserEntity> {
    const { email, username, password } = userData;
    const result = await pool.query(
      "INSERT INTO users (email, username, password) VALUES ($1, $2, $3) RETURNING id, username",
      [email, username, password]
    );
    return result.rows[0];
  }
};