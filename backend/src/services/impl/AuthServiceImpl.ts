import { AuthService } from "../AuthService.js";
import { UserRepository } from "../../common-lib/repositories/UsersRepository.js";
import { userMapper } from "../../mapper/UsersMapper.js";
import { AuthRequestDTO } from "../../common-lib/dto/auth/AuthRequestDTO.js";
import { AuthResponseDTO } from "../../common-lib/dto/auth/AuthResponseDTO.js";
import { generateToken } from "../../common-lib/security/auth.js";
import bcrypt from "bcrypt";


const userRepository = new UserRepository();

export class AuthServiceImpl implements AuthService {

    async connectUser(userData: AuthRequestDTO): Promise<AuthResponseDTO & { token: string }> {
    const user = await userRepository.findByCredentials(userData.email);
    if (!user) {
        throw new Error("INVALID_CREDENTIALS");
    }

    const isValid = await bcrypt.compare(userData.password, user.password);
    if (!isValid) {
        throw new Error("INVALID_CREDENTIALS");
    }

    const userDTO: AuthResponseDTO = userMapper.toDTO(user);
    const token = await generateToken(userDTO);

    return {
        ...userDTO,
        token,
    };
}
}