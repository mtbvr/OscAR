import { GetAllHuntResponseDTO } from "../common-lib/dto/hunt/GetAllHuntResponseDTO";
import { CreateIndexResponseDTO } from "../common-lib/dto/index/CreateIndexResponseDTO";
import { GetIndexByHuntResponseDTO } from "../common-lib/dto/index/GetIndexByHuntResponseDTO";
import { IndexEntity } from "../common-lib/entity/IndexEntity";

export const indexMapper = {

  toCreateResponseDto(entity: IndexEntity): CreateIndexResponseDTO {
    return {
      id: entity.id,
      name: entity.name
    };
  },

  toLightDTO(entity: IndexEntity): GetIndexByHuntResponseDTO {
    return {
        id: entity.id,
        name: entity.name,
        index: entity.index
    }
  }

};