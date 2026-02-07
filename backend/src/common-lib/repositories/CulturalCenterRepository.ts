import { pool } from "../config/database.js";
import { CreateCulturalCenterRequestDTO } from "../dto/culturalcenter/CreateCulturalCenterRequestDTO.js";
import { CulturalCenterEntity } from "../entity/CulturalCenterEntity.js";

export class CulturalCenterRepository  {
    async create(culturalCenterData: CreateCulturalCenterRequestDTO): Promise<CulturalCenterEntity> {
        const result = await pool.query(
        "INSERT INTO cultural_center (name, description, address_id, picture_path) VALUES ($1, $2, $3, $4) RETURNING *",
        [culturalCenterData.name, culturalCenterData.description, culturalCenterData.address_id, culturalCenterData.picture_path]
        );
        return result.rows[0];
    }

    async getAllActive(): Promise<CulturalCenterEntity[]> {
        const result = await pool.query("SELECT * FROM cultural_center WHERE isActive = true");
        return result.rows;
    }
}