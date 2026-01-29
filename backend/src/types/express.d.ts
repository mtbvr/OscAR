import { AuthResponseDTO } from "../common-lib/dto/auth/AuthResponseDTO";

declare global {
  namespace Express {
    interface Request {
      user?: AuthResponseDTO;
    }
  }
}

export {};
