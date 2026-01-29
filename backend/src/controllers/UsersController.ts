import { Request, Response } from "express";
import { UsersServiceImpl } from "../services/impl/UsersServiceImpl.js";

export class UsersController  {

  private usersService: UsersServiceImpl;

  constructor() {
    this.usersService = new UsersServiceImpl();
  }

  async getAll(req: Request, res: Response) {
    try {
      const users = await this.usersService.getAllUsers();
      res.json(users);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async createUser(req: Request, res: Response) {
    try {
      const userData = req.body;
      const newUser = await this.usersService.createUser(userData);
      res.status(201).json(newUser);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  }

};