import { CreateIndexResponseDTO } from "../common-lib/dto/index/CreateIndexResponseDTO";
import { IndexEntity } from "../common-lib/entity/IndexEntity";

export const indexMapper = {

  toCreateResponseDto(entity: IndexEntity): CreateIndexResponseDTO {
    return {
      id: entity.id,
      name: entity.name
    };
  },

};