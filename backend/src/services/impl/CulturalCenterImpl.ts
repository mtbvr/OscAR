
import { GetAllCulturalCenterResponseDTO } from "../../common-lib/dto/culturalcenter/GetAllCulturalCenterResponseDTO";
import { CulturalCenterRepository } from "../../common-lib/repositories/CulturalCenterRepository";
import { culturalCenterMapper } from "../../mapper/CulturalCenterMapper";
import { CulturalCenterService } from "../CulturalCenterService";

const culturalCenterRepository = new CulturalCenterRepository();

export class CulturalCenterServiceImpl implements CulturalCenterService {
    async getAllCulturalCenters(): Promise<GetAllCulturalCenterResponseDTO[]> {
        const culturalCenters = await culturalCenterRepository.getAllActive();
        return culturalCenters.map(culturalCenterMapper.toLightDTO);
    }
}