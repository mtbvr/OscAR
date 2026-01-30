import { UsersService } from "../UsersService.js";
import { UserRepository } from "../../common-lib/repositories/UsersRepository.js";
import { userMapper } from "../../mapper/UsersMapper.js";
import { NewUserRequestDTO } from "../../common-lib/dto/users/NewUserRequestDTO.js";

const userRepository = new UserRepository();

export class UsersServiceImpl implements UsersService {
  async getAllUsers() {
    const users = await userRepository.findAll();
    return users.map(userMapper.toDTO);
  }

  async createUser(userData: NewUserRequestDTO) {
    const newUser = await userRepository.create(userData);
    return userMapper.toDTONewUser(newUser);
  }
}