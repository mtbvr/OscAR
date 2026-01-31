import { LightUserDTO } from "../common-lib/dto/users/UsersGetAllDTO.js";
import { NewUserResponseDTO } from "../common-lib/dto/users/NewUserResponseDTO.js";
import { NewUserRequestDTO } from "../common-lib/dto/users/NewUserRequestDTO.js";

export interface UsersService {
  getAllUsers(): Promise<LightUserDTO[]>;
  createUser(userData: NewUserRequestDTO): Promise<NewUserResponseDTO>;
}