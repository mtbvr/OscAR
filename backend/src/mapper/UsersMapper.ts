import { UserEntity } from "../common-lib/entity/UsersEntity.js";
import { LightUserDTO } from "../common-lib/dto/UsersGetAllDTO.js";

export const userMapper = {
  toDTO(entity: UserEntity): LightUserDTO {
    return {
      id: entity.id,
      email: entity.email,
      username: entity.username
    };
  }
};