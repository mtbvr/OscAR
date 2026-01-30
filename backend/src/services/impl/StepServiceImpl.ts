import { StepService } from "../StepService";
import { CreateStepRequestDTO } from "../../common-lib/dto/step/CreateStepRequestDTO";
import { StepRepository } from "../../common-lib/repositories/StepRepository";
import { stepMapper } from "../../mapper/StepMapper";
import { CreateStepResponseDTO } from "../../common-lib/dto/step/CreateStepResponseDTO";

const stepRepository = new StepRepository();

export class StepServiceImpl implements StepService {

    async createStep(stepData: CreateStepRequestDTO): Promise<CreateStepResponseDTO> {
        const step = await stepRepository.create(stepData);
        const stepDto: CreateStepResponseDTO = stepMapper.toCreateResponseDto(step);

        return stepDto;
    }
}