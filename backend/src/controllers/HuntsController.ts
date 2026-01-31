import { NextFunction, Request, Response } from "express";
import { HuntServiceImpl } from "../services/impl/HuntServiceImpl.js";

export class HuntsController  {

  private huntsService: HuntServiceImpl;

  constructor() {
    this.huntsService = new HuntServiceImpl();
  }

  async createHunt(req: Request, res: Response, next: any) {
    try {
      const huntData = req.body;
      const newHunt = await this.huntsService.createHunt(huntData);
      res.status(201).json(newHunt);
    } catch (err) {
      console.error(err);
      next(err);
    }
  }

};