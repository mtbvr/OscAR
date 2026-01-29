import { Router } from "express";
import { UsersController } from "../controllers/UsersController.js";
import { authMiddleware } from "../common-lib/middlewares/AuthMiddleware.js";

const usersRoutes = Router();

usersRoutes.get("/users", authMiddleware, UsersController.getAll);

usersRoutes.post("/users", UsersController.createUser);

export default usersRoutes;