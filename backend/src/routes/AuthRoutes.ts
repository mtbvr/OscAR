import { Router } from 'express';
import { AuthController } from '../controllers/AuthController.js';
import { authMiddleware } from '../common-lib/middlewares/AuthMiddleware.js';

const authRoutes = Router();
authRoutes.post('/auth/login', AuthController.authentificateUser);

authRoutes.get('/auth/me', authMiddleware, AuthController.getCurrentUser);

authRoutes.post('/auth/logout', authMiddleware, AuthController.logoutUser);

export default authRoutes;