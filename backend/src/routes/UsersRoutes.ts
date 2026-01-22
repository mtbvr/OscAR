import { Router } from "express";
import { usersController } from "../controllers/UsersController.js";

const usersRoutes = Router();

usersRoutes.get("/users", usersController.getAll);

export default usersRoutes;