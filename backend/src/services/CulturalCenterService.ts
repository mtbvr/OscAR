import { GetAllCulturalCenterResponseDTO } from "../common-lib/dto/culturalcenter/GetAllCulturalCenterResponseDTO";

export interface CulturalCenterService {
    getAllActiveCulturalCenters(): Promise<GetAllCulturalCenterResponseDTO[]>;
}