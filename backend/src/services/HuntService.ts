import { CreateHuntRequestDTO } from "../common-lib/dto/hunt/CreateHuntRequestDTO.js";
import { CreateHuntResponseDTO } from "../common-lib/dto/hunt/CreateHuntResponseDTO";
import { GetAllHuntResponseDTO } from "../common-lib/dto/hunt/GetAllHuntResponseDTO.js";

export interface HuntService {
  createHunt(huntData: CreateHuntRequestDTO): Promise<CreateHuntResponseDTO>;
  getAllHunt(): Promise<GetAllHuntResponseDTO[]>;
}