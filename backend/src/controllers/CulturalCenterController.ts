import { CulturalCenterServiceImpl } from "../services/impl/CulturalCenterImpl";
import { Request, Response } from "express";

export class CulturalCenterController {
    private culturalCenterService: CulturalCenterServiceImpl;

    constructor() {
        this.culturalCenterService = new CulturalCenterServiceImpl();
    }

    async createCulturalCenter(req: Request, res: Response, next: any) {
        try {
            const culturalCenterData = req.body;
            const newCulturalCenter = await this.culturalCenterService.createCulturalCenter(culturalCenterData);
            res.status(201).json(newCulturalCenter);
        } catch (err) {
            console.error(err);
            next(err);
        }
    }
}