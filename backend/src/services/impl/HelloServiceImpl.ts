// Implémentation du service qui va chercher la bonne requete dans le repository, en sortir une entité qui va être mappée en fonction de la DTO
import { HelloService } from '../HelloService.js';
import { HelloRepository } from '../../common-lib/repositories/HelloRepository.js';
import { HelloMapper } from '../../mapper/HelloMapper.js';
import { HelloDto } from '../../common-lib/dto/HelloDto.js';

export class HelloServiceImpl implements HelloService {
  private repo = new HelloRepository();

  getHello(): HelloDto {
    const entity = this.repo.getHello();
    return HelloMapper.toDto(entity);
  }
}