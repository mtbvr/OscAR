import { CreateCulturalCenterResponseDTO } from "../common-lib/dto/culturalcenter/CreateCulturalCenterResponseDTO";
import { CulturalCenterEntity } from "../common-lib/entity/CulturalCenterEntity";

export const culturalCenterMapper = {

  toCreateResponseDto(entity: CulturalCenterEntity): CreateCulturalCenterResponseDTO {
    return {
      id: entity.id,
      name: entity.name
    };
  },
};