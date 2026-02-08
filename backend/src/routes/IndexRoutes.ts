import { Router } from "express";
import { IndexController } from "../controllers/IndexController.js";
import { authMiddleware, requireRole } from "../common-lib/middlewares/AuthMiddleware.js";
import { RoleEnum } from "../common-lib/enum/roleEnum.js";

const indexRoutes = Router();

const indexController = new IndexController();

indexRoutes.post(
    "/index", 
    authMiddleware,
    requireRole([RoleEnum.HUNT_MANAGER, RoleEnum.CULTURAL_CENTER_MANAGER, RoleEnum.ADMIN]), 
    (req, res, next) => indexController.createIndex(req, res, next)
);

indexRoutes.get (
    "/index/:huntId",
    authMiddleware,
    requireRole([RoleEnum.HUNT_MANAGER, RoleEnum.CULTURAL_CENTER_MANAGER, RoleEnum.ADMIN]),
    (req, res, next) => indexController.getIndexByHunt(req, res, next)
);

export default indexRoutes;