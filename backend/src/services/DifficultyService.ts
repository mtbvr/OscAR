import { GetAllDifficultyResponseDTO } from "../common-lib/dto/difficulty/GetAllDifficultyResponseDTO.js";

export interface DifficultyService {
  getAllDifficulty(): Promise<GetAllDifficultyResponseDTO[]>;
}