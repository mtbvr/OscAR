import { pool } from "../config/database.js";
import { UserEntity } from "../entity/UsersEntity.js";

export const userRepository = {
  async findAll(): Promise<UserEntity[]> {
    const result = await pool.query("SELECT id, email, username, password, created_at, updated_at FROM users");
    return result.rows;
  }
};