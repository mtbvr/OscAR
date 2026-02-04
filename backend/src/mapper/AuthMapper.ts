import { AuthResponseDTO } from "../common-lib/dto/auth/AuthResponseDTO";
import { UserEntity } from "../common-lib/entity/UsersEntity";

export const authMapper = {

  toResponseAuthDTO(entity: UserEntity): AuthResponseDTO {
    return {
        id: entity.id,
        username: entity.username, //to delete
        rights: entity.rights
        //cultural_center: number,
    };
  },

};