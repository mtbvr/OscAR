import { pool } from "../config/database";
import { GetIndexByHuntRequestDTO } from "../dto/index/GetIndexByHuntRequestDTO";
import { HuntEntity } from "../entity/HuntEntity";
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

    async create(indexData: { name?: string; index: number; hunt_id: number; }): Promise<IndexEntity> {
        const result = await pool.query(
            "INSERT INTO index (name, index, hunt_id) VALUES ($1, $2, $3) RETURNING *",
            [
                indexData.name,
                indexData.index,
                indexData.hunt_id
            ]
        )
        return result.rows[0];
    }

    async getByHuntID(huntId: GetIndexByHuntRequestDTO): Promise<IndexEntity[]> {
        const result = await pool.query(
            "SELECT * FROM index WHERE hunt_id = ($1)",
            [huntId]
        )
        return result.rows;
    }
}