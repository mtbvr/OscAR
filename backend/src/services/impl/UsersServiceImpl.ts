import { UsersService } from "../UsersService.js";
import { userRepository } from "../../common-lib/repositories/UsersRepository.js";
import { userMapper } from "../../mapper/UsersMapper.js";

export class UsersServiceImpl implements UsersService {
  async getAllUsers() {
    const users = await userRepository.findAll();
    return users.map(userMapper.toDTO);
  }

  async createUser(userData: any) {
    const newUser = await userRepository.create(userData);
    return userMapper.toDTONewUser(newUser);
  }
}