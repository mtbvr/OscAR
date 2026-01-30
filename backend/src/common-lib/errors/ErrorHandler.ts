import { Request, Response, NextFunction } from 'express';
import AppError from './AppError';

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  // Stack log back
  console.error('Error caught by errorHandler:', { name: err?.name, message: err?.message, stack: err?.stack });

  // Erreurs connues de type AppError
  if (err instanceof AppError) {
    const clientPayload = err.toClient();
    return res.status(err.statusCode).json({ message: clientPayload.message, statusCode: clientPayload.statusCode, details: clientPayload.details });
  }

  // Pour les erreurs non gérées, déterminer si c'est une erreur de base de données
  const messageLower = (err?.message ?? '').toString().toLowerCase();
  const dbKeywords = ['ecconnrefused', 'connection refused', 'database', 'db', 'pg', 'sequelize', 'timeout', 'connect'];
  const isDbError = dbKeywords.some(k => messageLower.includes(k));

  const status = (err && typeof err.statusCode === 'number') ? err.statusCode : (isDbError ? 503 : 500);
  const clientMessage = isDbError ? 'Problème de connexion à la base de données' : 'Une erreur est survenue, veuillez réessayer plus tard.';

  return res.status(status).json({ message: clientMessage, statusCode: status });
}

export default errorHandler;
