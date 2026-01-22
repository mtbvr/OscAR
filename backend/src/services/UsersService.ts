import { LightUserDTO } from "../common-lib/dto/UsersGetAllDTO.js";

export interface UsersService {
  getAllUsers(): Promise<LightUserDTO[]>;
}