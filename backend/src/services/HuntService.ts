import { CreateHuntRequestDTO } from "../common-lib/dto/hunt/CreateHuntRequestDTO.js";
import { CreateHuntResponseDTO } from "../common-lib/dto/hunt/CreateHuntResponseDTO";

export interface HuntService {
  createHunt(userData: CreateHuntRequestDTO): Promise<CreateHuntResponseDTO>;
}