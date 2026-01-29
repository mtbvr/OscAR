import { UsersService } from "../UsersService.js";
import { UserRepository } from "../../common-lib/repositories/UsersRepository.js";
import { userMapper } from "../../mapper/UsersMapper.js";

const userRepository = new UserRepository();

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