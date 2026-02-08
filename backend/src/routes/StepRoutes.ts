import { Router } from "express";
import { StepsController } from "../controllers/StepsController.js";
import { authMiddleware, requireRole } from "../common-lib/middlewares/AuthMiddleware.js";
import { RoleEnum } from "../common-lib/enum/roleEnum.js";

const stepsRoutes = Router();

const stepsController = new StepsController();

stepsRoutes.post(
    "/step", 
    authMiddleware, 
    requireRole([RoleEnum.HUNT_MANAGER, RoleEnum.CULTURAL_CENTER_MANAGER, RoleEnum.ADMIN]),
    (req, res, next) => stepsController.createStep(req, res, next)
);

export default stepsRoutes;