import { Router } from "express";
import { UsersController } from "../controllers/UsersController.js";
import { authMiddleware, requireRole } from "../common-lib/middlewares/AuthMiddleware.js";
import { RoleEnum } from "../common-lib/enum/roleEnum.js";

const usersRoutes = Router();

const usersController = new UsersController();

usersRoutes.get(
    "/users",
    authMiddleware, 
    requireRole([RoleEnum.ADMIN]),
    (req, res, next) => usersController.getAll(req, res, next)
);

usersRoutes.post(
    "/users/web", 
    (req, res, next) => usersController.createUser(req, res, next)
);

export default usersRoutes;