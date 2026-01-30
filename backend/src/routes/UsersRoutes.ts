import { Router } from "express";
import { UsersController } from "../controllers/UsersController.js";
import { authMiddleware } from "../common-lib/middlewares/AuthMiddleware.js";

const usersRoutes = Router();

const usersController = new UsersController();

usersRoutes.get("/users", authMiddleware, usersController.getAll);

usersRoutes.post("/users", usersController.createUser);

usersRoutes.get("/users/:id", usersController.getUserById);

export default usersRoutes;