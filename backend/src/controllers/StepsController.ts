import { Request, Response } from "express";
import { StepServiceImpl } from "../services/impl/StepServiceImpl";

export class StepsController  {

  private stepService: StepServiceImpl;

  constructor() {
    this.stepService = new StepServiceImpl();
  }

  async createStep(req: Request, res: Response) {
    try {
      const stepData = req.body;
      const newStep = await this.stepService.createStep(stepData);
      res.status(201).json(newStep);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  }

};