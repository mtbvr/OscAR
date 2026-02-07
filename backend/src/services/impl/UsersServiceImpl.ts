import { UsersService } from "../UsersService.js";
import { UserRepository } from "../../common-lib/repositories/UsersRepository.js";
import { userMapper } from "../../mapper/UsersMapper.js";
import { NewUserRequestDTO } from "../../common-lib/dto/users/NewUserRequestDTO.js";
import AppError from "../../common-lib/errors/AppError.js";
import { AddressRepository } from "../../common-lib/repositories/AddressRepository.js";
import { CulturalCenterRepository } from "../../common-lib/repositories/CulturalCenterRepository.js";

const userRepository = new UserRepository();
const culturalCenterRepository = new CulturalCenterRepository();
const addressRepository = new AddressRepository();


export class UsersServiceImpl implements UsersService {
  async getAllUsers() {
    const users = await userRepository.findAll();
    return users.map(userMapper.toDTO);
  }

  async createUser(userData: NewUserRequestDTO) {
    try {

      if (userData.isNewCulturalCenter && userData.newCulturalCenter) {
        const address = await addressRepository.create(userData.newCulturalCenter.address);
        userData.newCulturalCenter.address_id = address.id;
        const culturalCenter = await culturalCenterRepository.create(userData.newCulturalCenter);

        userData.id_cultural_center = culturalCenter.id;
      }
      const newUser = await userRepository.create(userData);
      return userMapper.toDTONewUser(newUser);
    } catch (error: any) {
      if (error.code === '23505') {
        throw new AppError({
          userMessage: 'Un utilisateur avec cet email existe déjà',
          statusCode: 409,
        });      
      }
      throw new AppError({
        userMessage: 'Erreur lors de la création de l\'utilisateur',
        statusCode: 500,
      });    
    }
  }
}