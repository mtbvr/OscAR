import { Router } from "express";
import { StepsController } from "../controllers/StepsController.js";
import { authMiddleware } from "../common-lib/middlewares/AuthMiddleware.js";

const stepsRoutes = Router();

const stepsController = new StepsController();

stepsRoutes.post("/step", authMiddleware, (req, res, next) => stepsController.createStep(req, res, next));

export default stepsRoutes;