import { Request, Response } from "express";
import { DifficultyServiceImpl } from "../services/impl/DifficultyServiceImpl.js";

export class DifficultyController  {

  private difficultyService: DifficultyServiceImpl;

  constructor() {
    this.difficultyService = new DifficultyServiceImpl();
  }

  async getAll(req: Request, res: Response, next: any) {
    try {
      console.log("Getting all difficulty");
      const users = await this.difficultyService.getAllDifficulty();
      res.status(200).json(users);
    } catch (err) {
      next(err);
    }
  }
}