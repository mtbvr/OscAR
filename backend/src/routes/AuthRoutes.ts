import { Router } from 'express';
import { authMiddleware } from '../common-lib/middlewares/AuthMiddleware.js';
import { AuthServiceImpl } from '../services/impl/AuthServiceImpl.js';
import { AuthController } from '../controllers/AuthController.js';
const authRoutes = Router();

const authController = new AuthController();

authRoutes.post('/auth/login', authController.authentificateUser);

authRoutes.get('/auth/me', authMiddleware, authController.getCurrentUser);

authRoutes.post('/auth/logout', authMiddleware, authController.logoutUser);

export default authRoutes;