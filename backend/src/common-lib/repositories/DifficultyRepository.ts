import { pool } from "../config/database.js";
import { DifficultyEntity } from "../entity/DifficultyEntity.js";

export class DifficultyRepository  {
  async getAll(): Promise<DifficultyEntity[]> {
    const result = await pool.query("SELECT * FROM difficulty");
    return result.rows;
  }
}