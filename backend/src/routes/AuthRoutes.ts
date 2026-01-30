import { Router } from 'express';
import { authMiddleware } from '../common-lib/middlewares/AuthMiddleware.js';
import { AuthServiceImpl } from '../services/impl/AuthServiceImpl.js';
import { AuthController } from '../controllers/AuthController.js';
const authRoutes = Router();

const authController = new AuthController();

authRoutes.post('/auth/login', (req, res, next) => authController.authentificateUser(req, res, next));

authRoutes.get('/auth/me', authMiddleware, (req, res, next) => authController.getCurrentUser(req, res));

authRoutes.post('/auth/logout', authMiddleware, (req, res, next) => authController.logoutUser(req, res));
export default authRoutes;