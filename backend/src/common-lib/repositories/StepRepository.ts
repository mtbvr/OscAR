import { pool } from "../config/database";
import { CreateStepRequestDTO } from "../dto/step/CreateStepRequestDTO";
import { StepEntity } from "../entity/StepEntity";

export class StepRepository {

    async create (stepData: CreateStepRequestDTO): Promise<StepEntity> {
        const result = await pool.query(
            "INSERT INTO steps (name, description, id_hunt) VALUES ($1, $2, $3) RETURNING id",
            [stepData.name, stepData.description, stepData.id_hunt]
        )
        return result.rows[0];
    }

}