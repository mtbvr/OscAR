import { Request, Response, NextFunction } from "express";
import { jwtVerify } from "jose";
import { AuthResponseDTO } from "../dto/auth/AuthResponseDTO";
import AppError from "../errors/AppError";

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
      route: req.originalUrl,
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
      route: req.originalUrl,
    }));
  }
}

// Factory middleware to require one or more roles.
// Usage: app.get('/admin', requireRole('ADMIN'), handler)
export function requireRole(required: string | string[]) {
  const requiredRoles = Array.isArray(required) ? required : [required];

  return async (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies?.token;

    if (!token) {
      return next(new AppError({
        userMessage: 'Token d\'authentification manquant',
        statusCode: 401,
        route: req.originalUrl,
      }));
    }

    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET);
      const { payload } = await jwtVerify(token, secret);

      req.user = payload as unknown as AuthResponseDTO & { role?: string };

      const userRole = (req.user as any)?.role;

      if (!userRole) {
        return next(new AppError({
          userMessage: 'Votre token ne permet pas de vérifier votre rôle',
          statusCode: 403,
          route: req.originalUrl,
        }));
      }

      if (!requiredRoles.includes(userRole)) {
        return next(new AppError({
          userMessage: 'Accès refusé: rôle insuffisant',
          statusCode: 403,
          route: req.originalUrl,
        }));
      }

      return next();
    } catch (err) {
      return next(new AppError({
        userMessage: 'Token d\'authentification invalide',
        statusCode: 401,
        route: req.originalUrl,
      }));
    }
  };
}