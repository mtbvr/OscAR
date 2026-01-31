import { UsersService } from "../UsersService.js";
import { UserRepository } from "../../common-lib/repositories/UsersRepository.js";
import { userMapper } from "../../mapper/UsersMapper.js";
import { NewUserRequestDTO } from "../../common-lib/dto/users/NewUserRequestDTO.js";
import AppError from "../../common-lib/errors/AppError.js";

const userRepository = new UserRepository();

export class UsersServiceImpl implements UsersService {
  async getAllUsers() {
    const users = await userRepository.findAll();
    return users.map(userMapper.toDTO);
  }

  async createUser(userData: NewUserRequestDTO) {
    try {
      const newUser = await userRepository.create(userData);
      return userMapper.toDTONewUser(newUser);
    } catch (error: any) {
      if (error.code === '23505') {
        throw new AppError({
          userMessage: 'Un utilisateur avec cet email existe déjà',
          statusCode: 409,
      });      }
      throw new AppError({
        userMessage: 'Erreur lors de la création de l\'utilisateur',
        statusCode: 500,
      });    
    }
  }
}