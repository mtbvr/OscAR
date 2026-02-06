import { DifficultyEntity } from "../common-lib/entity/DifficultyEntity.js";
import { GetAllDifficultyResponseDTO } from "../common-lib/dto/difficulty/GetAllDifficultyResponseDTO.js";

export const difficultyMapper = {
  toLightDTO(entity: DifficultyEntity): GetAllDifficultyResponseDTO {
    return {
      id: entity.id,
      name: entity.name,
      multiplicator: entity.multiplicator
    };
  },

};