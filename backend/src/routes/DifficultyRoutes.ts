import { Router } from "express";
import { DifficultyController } from "../controllers/DifficultyController.js";
import { authMiddleware } from "../common-lib/middlewares/AuthMiddleware.js";

const difficultyRoutes = Router();

const difficultyController = new DifficultyController();

difficultyRoutes.get("/difficulty", authMiddleware, (req, res, next) => difficultyController.getAll(req, res, next));

export default difficultyRoutes;