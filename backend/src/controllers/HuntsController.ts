import { Request, Response } from "express";

export class HuntsController  {

  private huntsService: HuntsServiceImpl;

  constructor() {
    this.huntsService = new HuntsServiceImpl();
  }

  async createHunt(req: Request, res: Response) {
    try {
      const huntData = req.body;
      const newHunt = await this.huntsService.createUser(huntData);
      res.status(201).json(newHunt);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  }

};