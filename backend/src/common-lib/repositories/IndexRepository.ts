import { pool } from "../config/database";
import { IndexEntity } from "../entity/IndexEntity";

export class IndexRepository {

    async createIncrementEmpty(hunt_id: number): Promise<IndexEntity> {

        const maxResult = await pool.query(
            `SELECT COALESCE(MAX(index), 0) AS max_index
             FROM index
             WHERE hunt_id = $1`,
            [hunt_id]
        );

        const nextIndex = maxResult.rows[0].max_index + 1;

        const insertResult = await pool.query(
            `INSERT INTO index (hunt_id, index)
             VALUES ($1, $2)
             RETURNING *`,
            [hunt_id, nextIndex]
        );

        return insertResult.rows[0];
    }
}