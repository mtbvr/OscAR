import { CreateCulturalCenterRequestDTO } from "../../common-lib/dto/culturalcenter/CreateCulturalCenterRequestDTO";
import { CreateCulturalCenterResponseDTO } from "../../common-lib/dto/culturalcenter/CreateCulturalCenterResponseDTO";
import { CulturalCenterEntity } from "../../common-lib/entity/CulturalCenterEntity";
import { AddressRepository } from "../../common-lib/repositories/AddressRepository";
import { CulturalCenterRepository } from "../../common-lib/repositories/CulturalCenterRepository";
import { culturalCenterMapper } from "../../mapper/CulturalCenterMapper";
import { CulturalCenterService } from "../CulturalCenterService";

const culturalCenterRepository = new CulturalCenterRepository();
const addressRepository = new AddressRepository();

export class CulturalCenterServiceImpl implements CulturalCenterService {
    async createCulturalCenter(culturalCenterData: CreateCulturalCenterRequestDTO): Promise<CreateCulturalCenterResponseDTO> {
        const address_id = await addressRepository.create(culturalCenterData.address);
        culturalCenterData.address_id = address_id.id;

        const culturalCenter = await culturalCenterRepository.create(culturalCenterData);
        const culturalCenterDto = culturalCenterMapper.toCreateResponseDto(culturalCenter);
        return culturalCenterDto;
    }

}