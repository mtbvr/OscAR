import { Request, Response } from "express";
import { UsersServiceImpl } from "../services/impl/UsersServiceImpl.js";

export class UsersController  {

  private usersService: UsersServiceImpl;

  constructor() {
    this.usersService = new UsersServiceImpl();
  }

  async getAll(req: Request, res: Response, next: any) {
    try {
      console.log("Getting all users");
      const users = await this.usersService.getAllUsers();
      res.status(200).json(users);
    } catch (err) {
      next(err);
    }
  }

  async createUser(req: Request, res: Response, next: any) {
    try {
      console.log("Creating user");
      const userData = req.body;
      const newUser = await this.usersService.createUser(userData);
      res.status(201).json(newUser);
    } catch (err) {
      next(err);
    }
  }

  async getUserById(req: Request, res: Response, next: any) {
    try {
      console.log(".env JWT_SECRET:", process.env.JWT_SECRET);
      const { id } = req.params;
      const user = await this.usersService.getUserById(id);
      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  }

};