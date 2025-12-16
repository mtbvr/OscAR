// Mappe les entité en dto
import { HelloEntity } from '../common-lib/entity/HelloEntity.js';
import { HelloDto } from '../common-lib/dto/HelloDto.js';

export class HelloMapper {
  static toDto(entity: HelloEntity): HelloDto {
    return { message: entity.message };
  }
}