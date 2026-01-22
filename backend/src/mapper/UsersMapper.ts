import { UserEntity } from "../common-lib/entity/UsersEntity.js";
import { LightUserDTO } from "../common-lib/dto/users/UsersGetAllDTO.js";
import { NewUserDTO } from "../common-lib/dto/users/NewUserDTO.js";

export const userMapper = {
  toDTO(entity: UserEntity): LightUserDTO {
    return {
      id: entity.id,
      email: entity.email,
      username: entity.username
    };
  },

  toDTONewUser(entity: UserEntity): NewUserDTO {
    return {
      id: entity.id,
      username: entity.username
    };
  }
};