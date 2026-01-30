import { CreateStepResponseDTO } from "../common-lib/dto/step/CreateStepResponseDTO";
import { StepEntity } from "../common-lib/entity/StepEntity";

export const stepMapper = {

  toCreateResponseDto(entity: StepEntity): CreateStepResponseDTO {
    return {
      id: entity.id,
      name: entity.name
    };
  },

};