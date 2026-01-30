import { Router } from "express";
import { UsersController } from "../controllers/UsersController.js";
import { authMiddleware } from "../common-lib/middlewares/AuthMiddleware.js";

const usersRoutes = Router();

const usersController = new UsersController();

usersRoutes.get("/users", authMiddleware, (req, res, next) => usersController.getAll(req, res, next));

usersRoutes.post("/users", (req, res, next) => usersController.createUser(req, res, next));

export default usersRoutes;