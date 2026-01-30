import { AuthResponseDTO } from "../common-lib/dto/auth/AuthResponseDTO";
import { UserEntity } from "../common-lib/entity/UsersEntity";

export const huntMapper = {

  toResponseAuthDTO(entity: UserEntity): AuthResponseDTO {
    return {
        id: entity.id,
        username: entity.username //to delete
        //role: string,
        //cultural_center: number,
    };
  },

};