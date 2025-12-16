// Recois les requetes, la transmet a l'interface du service et renvoie la reponse
import { Request, Response } from 'express';
import { HelloServiceImpl } from '../services/impl/HelloServiceImpl.js';

const service = new HelloServiceImpl();

export class HelloController {
  static getHello(req: Request, res: Response) {
    const dto = service.getHello();
    res.json(dto);
  }
}