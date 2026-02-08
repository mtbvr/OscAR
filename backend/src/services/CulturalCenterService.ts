import { GetAllActiveCulturalCenterResponseDTO } from "../common-lib/dto/culturalcenter/GetAllActiveCulturalCenterResponseDTO";
import { GetAllCulturalCenterResponseDTO } from "../common-lib/dto/culturalcenter/GetAllCulturalCenterResponseDTO";

export interface CulturalCenterService {
    getAllActiveCulturalCenters(): Promise<GetAllActiveCulturalCenterResponseDTO[]>;
    getAllCulturalCenter(): Promise<GetAllCulturalCenterResponseDTO[]>;
}