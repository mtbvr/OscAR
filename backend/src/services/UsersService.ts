import { LightUserDTO } from "../common-lib/dto/users/UsersGetAllDTO.js";
import { NewUserDTO } from "../common-lib/dto/users/NewUserDTO.js";

export interface UsersService {
  getAllUsers(): Promise<LightUserDTO[]>;
  createUser(userData: any): Promise<NewUserDTO>;
}