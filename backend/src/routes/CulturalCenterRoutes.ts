import { Router } from 'express';
import { authMiddleware } from '../common-lib/middlewares/AuthMiddleware.js';
import { AuthServiceImpl } from '../services/impl/AuthServiceImpl.js';
import { AuthController } from '../controllers/AuthController.js';

const culturalCenterRoutes = Router();

const culturalCenterController = new AuthController();

culturalCenterRoutes.post('/culturalcenter', (req, res, next) => culturalCenterController.authentificateUser(req, res, next));

export default culturalCenterRoutes;