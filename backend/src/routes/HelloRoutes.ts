// Repertoire des endpoints
import { Router } from 'express';
import { HelloController } from '../controllers/HelloController.js';

const helloRoutes = Router();
helloRoutes.get('/hello', HelloController.getHello);

export default helloRoutes;