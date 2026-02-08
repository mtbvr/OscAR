
import { GetAllCulturalCenterResponseDTO } from "../../common-lib/dto/culturalcenter/GetAllCulturalCenterResponseDTO";
import { AppError } from "../../common-lib/errors/AppError";
import { CulturalCenterRepository } from "../../common-lib/repositories/CulturalCenterRepository";
import { culturalCenterMapper } from "../../mapper/CulturalCenterMapper";
import { CulturalCenterService } from "../CulturalCenterService";

const culturalCenterRepository = new CulturalCenterRepository();

export class CulturalCenterServiceImpl implements CulturalCenterService {
    async getAllActiveCulturalCenters(): Promise<GetAllCulturalCenterResponseDTO[]> {
        try {
            const culturalCenters = await culturalCenterRepository.getAllActive();
            return culturalCenters.map(culturalCenterMapper.toLightDTO);
        }
        catch (error: any) {
            throw new AppError({
                userMessage: 'Erreur lors de la récupération des centres culturels actifs',
                statusCode: 500,
            });
        }
    }
}