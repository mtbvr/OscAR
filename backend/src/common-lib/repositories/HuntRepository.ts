import { pool } from "../config/database";
import { CreateHuntRequestDTO } from "../dto/hunt/CreateHuntRequestDTO";
import { HuntEntity } from "../entity/HuntEntity";

export class HuntRepository {

    async create (huntData: CreateHuntRequestDTO): Promise<HuntEntity> {
        const result = await pool.query(
            "INSERT INTO hunts (title, description, creator_id, difficulty_id, points, latitude, longitude, picture_path) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
            [
                huntData.title,
                huntData.description,
                huntData.creator_id,
                huntData.difficulty_id,
                huntData.points,
                huntData.latitude,
                huntData.longitude,
                huntData.picture_path
            ]
        )
        return result.rows[0];
    }

    async getAll(): Promise<HuntEntity[]> {
        const result = await pool.query("SELECT * FROM hunts")
        return result.rows
    }

}