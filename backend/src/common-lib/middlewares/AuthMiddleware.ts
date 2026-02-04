import { Request, Response, NextFunction } from "express";
import { jwtVerify } from "jose";
import { AuthResponseDTO } from "../dto/auth/AuthResponseDTO";
import AppError from "../errors/AppError.js";
import { RoleEnum } from "../enum/roleEnum.js";

export async function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.cookies?.token;

  if (!token) {
    return next(new AppError({
      userMessage: 'Utilisateur non connecté',
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
      userMessage: 'Utilisateur non connecté',
      statusCode: 401,
      route: req.originalUrl,
    }));
  }
}

// Factory middleware to require one or more roles.
// Usage: app.get('/admin', requireRole(RoleEnum.ADMIN), handler)
// Usage: app.get('/manager', requireRole([RoleEnum.ADMIN, RoleEnum.HUNT_MANAGER]), handler)
export function requireRole(required: RoleEnum | RoleEnum[]) {
  const requiredRoles = Array.isArray(required) ? required : [required];

  return async (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies?.token;

    if (!token) {
      return next(new AppError({
        userMessage: 'Utilisateur non connecté',
        statusCode: 401,
        route: req.originalUrl,
      }));
    }

    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET);
      const { payload } = await jwtVerify(token, secret);

      req.user = payload as unknown as AuthResponseDTO & { role?: string };

      const userRole = (req.user as any)?.rights;

      if (!userRole) {
        return next(new AppError({
          userMessage: 'Votre jeton d\'authentification ne permet pas de vérifier votre rôle',
          statusCode: 403,
          route: req.originalUrl,
        }));
      }

      if (!userRole.some((role: string) => requiredRoles.includes(role as RoleEnum))) {
        console.log('User role:', userRole);
        return next(new AppError({
          userMessage: 'Accès refusé: rôle insuffisant',
          statusCode: 403,
          route: req.originalUrl,
        }));
      }


      return next();
    } catch (err) {
      return next(new AppError({
        userMessage: 'Jeton d\'authentification invalide',
        statusCode: 401,
        route: req.originalUrl,
      }));
    }
  };
}