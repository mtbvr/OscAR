import { Request, Response } from "express";
import { AuthServiceImpl } from "../services/impl/AuthServiceImpl.js";
import { AuthRequestDTO } from "../common-lib/dto/auth/AuthRequestDTO.js";

export class AuthController {

  private authService: AuthServiceImpl;

  constructor() {
    this.authService = new AuthServiceImpl();
  }

  async authentificateUser(req: Request, res: Response) {
    try {
      const authRequest: AuthRequestDTO = req.body;

      if (!authRequest.email || !authRequest.password) {
        return res.status(400).json({ error: "Missing credentials" });
      }

      const result = await this.authService.connectUser(authRequest);

      if (!result) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      res.cookie("token", result.token, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 1000 * 60 * 60 * 24,
        });

      const { token, ...user } = result;

      return res.json(user);


    } catch (err) {
      console.error("Auth error:", err);
      return res.status(500).json({ error: "Internal server error" });
    }
  }

  async getCurrentUser(req: Request, res: Response) {
     return res.json(req.user);
  }

 async logoutUser(req: Request, res: Response) {
    res.clearCookie("token", {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
    });
    return res.sendStatus(204);;
  }

}