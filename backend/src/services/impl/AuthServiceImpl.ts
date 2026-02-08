import { AuthService } from "../AuthService.js";
import { UserRepository } from "../../common-lib/repositories/UsersRepository.js";
import { authMapper } from "../../mapper/AuthMapper.js";
import { AuthRequestDTO } from "../../common-lib/dto/auth/AuthRequestDTO.js";
import { AuthResponseDTO } from "../../common-lib/dto/auth/AuthResponseDTO.js";
import { generateToken } from "../../common-lib/security/auth.js";
import bcrypt from "bcrypt";
import AppError from "../../common-lib/errors/AppError.js";
import { RoleEnum } from "../../common-lib/enum/roleEnum.js";


const userRepository = new UserRepository();

export class AuthServiceImpl implements AuthService {

    async connectUser(userData: AuthRequestDTO): Promise<AuthResponseDTO & { token: string }> {
        let user;
        try {
            user = await userRepository.findByCredentials(userData.email);
            console.log(user)
        } catch (err: any) {
            throw new AppError({
                userMessage: 'Problème de connexion à la base de données',
                statusCode: 503,
            });
        }

        if (!user) {
            throw new AppError({
                userMessage: 'Identifiants invalides',
                statusCode: 401,
            });
        }

        if (!(user.rights.length === 1 && user.rights[0] === RoleEnum.USER)) {
            if (!user.isActive) {
                throw new AppError({
                    userMessage: 'Compte inactif. Veuillez contacter un administrateur ou attendre l\'activation de votre compte.',
                    statusCode: 403,
                });
            }
        }

        const isValid = await bcrypt.compare(userData.password, user.password);
        if (!isValid) {
            throw new AppError({
                userMessage: 'Identifiants invalides',
                statusCode: 401,
            });
        }

    const userDTO: AuthResponseDTO = authMapper.toResponseAuthDTO(user);
    const token = await generateToken(userDTO);

    return {
        ...userDTO,
        token,
    };
}
}