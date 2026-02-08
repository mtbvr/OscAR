import { UserEntity } from "../common-lib/entity/UsersEntity.js";
import { LightUserDTO } from "../common-lib/dto/users/UsersGetAllDTO.js";
import { NewUserResponseDTO } from "../common-lib/dto/users/NewUserResponseDTO.js";

export const userMapper = {
  toLightDTO(entity: UserEntity): LightUserDTO {
    return {
      id: entity.id,
      email: entity.email,
    };
  },

  toDTONewUser(entity: UserEntity): NewUserResponseDTO {
    return {
      id: entity.id,
      username: entity.username
    };
  }
};