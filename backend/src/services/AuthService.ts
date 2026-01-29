import { AuthRequestDTO } from "../common-lib/dto/auth/AuthRequestDTO.js";
import { AuthResponseDTO } from "../common-lib/dto/auth/AuthResponseDTO.js";

export interface AuthService {
  connectUser(userData: AuthRequestDTO): Promise<AuthResponseDTO & { token: string }>;
}