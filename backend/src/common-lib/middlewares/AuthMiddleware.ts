import { Request, Response, NextFunction } from "express";
import { jwtVerify } from "jose";
import { AuthResponseDTO } from "../dto/auth/AuthResponseDTO";
import AppError from "../errors/AppError.js";

export async function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.cookies?.token;

  if (!token) {
    return next(new AppError({
      userMessage: 'Token d\'authentification manquant',
      statusCode: 401,
    }));
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);

    req.user = payload as unknown as AuthResponseDTO;

    next();
  } catch (err) {
    return next(new AppError({
      userMessage: 'Token d\'authentification invalide',
      statusCode: 401,
    }));
  }
}