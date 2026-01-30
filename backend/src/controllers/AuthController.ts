import { Request, Response } from "express";
import { AuthServiceImpl } from "../services/impl/AuthServiceImpl.js";
import { AuthRequestDTO } from "../common-lib/dto/auth/AuthRequestDTO.js";
import AppError from "../common-lib/errors/AppError.js";

export class AuthController {

  private authService: AuthServiceImpl;

  constructor() {
    this.authService = new AuthServiceImpl();
  }

  async authentificateUser(req: Request, res: Response, next: any) {
    try {
      console.log("Authenticating user");
      const authRequest: AuthRequestDTO = req.body;

      const validationItems = [] as any[];
      if (!authRequest.email) validationItems.push({ field: 'email', message: 'Email requis' });
      if (!authRequest.password) validationItems.push({ field: 'password', message: 'Mot de passe requis' });
      if (validationItems.length) throw new AppError({ userMessage: 'Données invalides', details: validationItems, statusCode: 400 });

      const result = await this.authService.connectUser(authRequest);

      if (!result) {
        throw new AppError({ userMessage: 'Identifiants invalides', statusCode: 401 });
      }

      res.cookie("token", result.token, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 1000 * 60 * 60 * 24,
        });

      const { token, ...user } = result;
      console.log("User authenticated", user);
      return res.json(user);
    } catch (err) {
      return next(err);
    }
  }

  async getCurrentUser(req: Request, res: Response) {
      console.log("Getting current user", req.user);
      return res.json(req.user);
  }

 async logoutUser(req: Request, res: Response) {
    console.log("Logging out user", req.user);
    res.clearCookie("token", {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
    });
    return res.sendStatus(204);;
  }

}