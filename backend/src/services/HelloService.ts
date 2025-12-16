// Interface du service qui va retransmettre les appels du controller à l'implementation du service
import { HelloDto } from '../common-lib/dto/HelloDto.js';

export interface HelloService {
  getHello(): HelloDto;
}