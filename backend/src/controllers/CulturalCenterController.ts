import { CulturalCenterServiceImpl } from "../services/impl/CulturalCenterImpl";
import { Request, Response } from "express";

export class CulturalCenterController {
    private culturalCenterService: CulturalCenterServiceImpl;

    constructor() {
        this.culturalCenterService = new CulturalCenterServiceImpl();
    }

    async getAllActive(req: Request, res: Response, next: any) {
        try {
            const culturalCenters = await this.culturalCenterService.getAllActiveCulturalCenters();
            res.status(200).json(culturalCenters);
        } catch (err) {
            console.error(err);
            next(err);
        }
    }

    async getAll(req: Request, res: Response, next: any) {
        try {
            const culturalCenters = await this.culturalCenterService.getAllCulturalCenter();
            res.status(200).json(culturalCenters)
        } catch (err) {
            console.error(err)
            next(err)
        }
    }
}