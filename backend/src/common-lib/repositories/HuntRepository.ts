import { pool } from "../config/database";
import { CreateHuntRequestDTO } from "../dto/hunt/CreateHuntRequestDTO";
import { HuntEntity } from "../entity/HuntEntity";

export class HuntRepository {

    async create (huntData: CreateHuntRequestDTO): Promise<HuntEntity> {
        const result = await pool.query(
            "INSERT INTO hunts (name, description, id_creator) VALUES ($1, $2, $3) RETURNING id",
            [huntData.name, huntData.description, huntData.id_creator]
        )
        return result.rows[0];
    }

}