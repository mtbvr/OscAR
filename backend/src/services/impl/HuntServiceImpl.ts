import { HuntService } from "../HuntService";
import { CreateHuntRequestDTO } from "../../common-lib/dto/hunt/CreateHuntRequestDTO";
import { CreateHuntResponseDTO } from "../../common-lib/dto/hunt/CreateHuntResponseDTO";
import { huntMapper } from "../../mapper/HuntsMapper";
import { HuntRepository } from "../../common-lib/repositories/HuntRepository";

const huntRepository = new HuntRepository();

export class HuntServiceImpl implements HuntService {

    async createHunt(huntData: CreateHuntRequestDTO): Promise<CreateHuntResponseDTO> {
        const hunt = await huntRepository.create(huntData);
        const huntDTO: CreateHuntResponseDTO = huntMapper.toCreateResponseDto(hunt);

        return huntDTO;
    }
}