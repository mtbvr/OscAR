import { Request, Response, NextFunction } from "express";
import { jwtVerify } from "jose";
import { AuthResponseDTO } from "../dto/auth/AuthResponseDTO";

export async function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.cookies?.token;

  if (!token) {
    return res.status(401).json({ error: "NO_TOKEN" });
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);

    req.user = payload as unknown as AuthResponseDTO;

    next();
  } catch (err) {
    return res.status(401).json({ error: "INVALID_TOKEN" });
  }
}