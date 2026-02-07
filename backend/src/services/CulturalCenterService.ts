import { CreateCulturalCenterRequestDTO } from "../common-lib/dto/culturalcenter/CreateCulturalCenterRequestDTO";
import { CreateCulturalCenterResponseDTO } from "../common-lib/dto/culturalcenter/CreateCulturalCenterResponseDTO";
import { CulturalCenterEntity } from "../common-lib/entity/CulturalCenterEntity";

export interface CulturalCenterService {
    createCulturalCenter(culturalCenterData: CreateCulturalCenterRequestDTO): Promise<CreateCulturalCenterResponseDTO>;
}