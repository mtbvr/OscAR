import { Request, Response } from "express";
import { UsersServiceImpl } from "../services/impl/UsersServiceImpl.js";

const usersService = new UsersServiceImpl();

export const usersController = {
  async getAll(req: Request, res: Response) {
    try {
      const users = await usersService.getAllUsers();
      res.json(users);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  }
};