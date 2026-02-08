import { Router } from "express";
import { HuntsController } from "../controllers/HuntsController.js";
import { authMiddleware, requireRole } from "../common-lib/middlewares/AuthMiddleware.js";
import { RoleEnum } from "../common-lib/enum/roleEnum.js";

const huntsRoutes = Router();

const huntsController = new HuntsController();

huntsRoutes.post(
    "/hunt", 
    authMiddleware,
    requireRole([RoleEnum.HUNT_MANAGER, RoleEnum.CULTURAL_CENTER_MANAGER, RoleEnum.ADMIN]),
    (req, res, next) => huntsController.createHunt(req, res, next)
);

huntsRoutes.get(
    "/hunt", 
    authMiddleware,
    requireRole([RoleEnum.HUNT_MANAGER, RoleEnum.CULTURAL_CENTER_MANAGER, RoleEnum.ADMIN]),
    (req, res, next) => huntsController.getAllHunt(req, res, next)
);

export default huntsRoutes;