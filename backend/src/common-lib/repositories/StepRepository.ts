import { pool } from "../config/database";
import { CreateStepRequestDTO } from "../dto/step/CreateStepRequestDTO";
import { StepEntity } from "../entity/StepEntity";

export class StepRepository {

    async create (stepData: CreateStepRequestDTO): Promise<StepEntity> {
        const result = await pool.query(
            "INSERT INTO steps (title, description, hunt_id, points, latitude, longitude, index_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
            [
                stepData.title, 
                stepData.description, 
                stepData.hunt_id, 
                stepData.points, 
                stepData.latitude, 
                stepData.longitude, 
                stepData.index_id
            ]
        )
        return result.rows[0];
    }

}