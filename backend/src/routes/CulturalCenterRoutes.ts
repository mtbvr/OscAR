import { Router } from 'express';
import { CulturalCenterController } from '../controllers/CulturalCenterController.js';

const culturalCenterRoutes = Router();

const culturalCenterController = new CulturalCenterController();

/**
 * @swagger
 * /culturalcenter/active:
 *   get:
 *     summary: Récupérer tous les centres culturels actifs
 *     tags: [CulturalCenter]
 *     responses:
 *       200:
 *         description: Liste des centres culturels actifs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/CulturalCenterLightDTO"
 */

culturalCenterRoutes.get(
    '/culturalcenter/active', 
    (req, res, next) => culturalCenterController.getAll(req, res, next)
);

export default culturalCenterRoutes;