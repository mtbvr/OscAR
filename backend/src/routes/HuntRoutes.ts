import { Router } from "express";
import { HuntsController } from "../controllers/HuntsController.js";
import { authMiddleware } from "../common-lib/middlewares/AuthMiddleware.js";

const huntsRoutes = Router();

const huntsController = new HuntsController();

huntsRoutes.post("/hunt", authMiddleware, (req, res, next) => huntsController.createHunt(req, res, next));

huntsRoutes.get("/hunt", authMiddleware, (req, res, next) => huntsController.getAllHunt(req, res, next));

export default huntsRoutes;