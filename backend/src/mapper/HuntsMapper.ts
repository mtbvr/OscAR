import { CreateHuntResponseDTO } from "../common-lib/dto/hunt/CreateHuntResponseDTO";
import { HuntEntity } from "../common-lib/entity/HuntEntity";

export const huntMapper = {

  toCreateResponseDto(entity: HuntEntity): CreateHuntResponseDTO {
    return {
      id: entity.id,
      name: entity.name
    };
  },

};