import { Router } from "express";
import { IndexController } from "../controllers/IndexController.js";
import { authMiddleware } from "../common-lib/middlewares/AuthMiddleware.js";

const indexRoutes = Router();

const indexController = new IndexController();

indexRoutes.post("/index", authMiddleware, (req, res, next) => indexController.createIndex(req, res, next));

indexRoutes.post ("/index/hunt", authMiddleware, (req, res, next) => indexController.getIndexByHunt(req, res, next))

export default indexRoutes;