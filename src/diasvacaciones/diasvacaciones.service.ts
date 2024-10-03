import { Injectable } from '@nestjs/common';
import { CreateDiasvacacionesDto } from './dto/create-diasvacaciones.dto';
import { UpdateDiasvacacionesDto } from './dto/update-diasvacaciones.dto';

@Injectable()
export class DiasvacacionesService {
  create(createDiasvacacioneDto: CreateDiasvacacionesDto) {
    return 'This action adds a new diasvacacione';
  }

  findAll() {
    return `This action returns all diasvacaciones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} diasvacacione`;
  }

  update(id: number, updateDiasvacacioneDto: UpdateDiasvacacionesDto) {
    return `This action updates a #${id} diasvacacione`;
  }

  remove(id: number) {
    return `This action removes a #${id} diasvacacione`;
  }
}
