import { CreateHuntRequestDTO } from "../common-lib/dto/hunt/CreateHuntRequestDTO.js";
import { CreateHuntResponseDTO } from "../common-lib/dto/hunt/CreateHuntResponseDTO";

export interface AuthService {
  createHunt(userData: CreateHuntRequestDTO): Promise<CreateHuntResponseDTO>;
}