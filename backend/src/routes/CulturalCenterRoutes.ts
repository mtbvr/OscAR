import { Router } from 'express';
import { CulturalCenterController } from '../controllers/CulturalCenterController.js';

const culturalCenterRoutes = Router();

const culturalCenterController = new CulturalCenterController();

culturalCenterRoutes.get('/culturalcenter/active', (req, res, next) => culturalCenterController.getAll(req, res, next));

export default culturalCenterRoutes;