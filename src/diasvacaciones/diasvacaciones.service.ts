import { Injectable } from '@nestjs/common';
import { CreateDiasvacacioneDto } from './dto/create-diasvacacione.dto';
import { UpdateDiasvacacioneDto } from './dto/update-diasvacacione.dto';

@Injectable()
export class DiasvacacionesService {
  create(createDiasvacacioneDto: CreateDiasvacacioneDto) {
    return 'This action adds a new diasvacacione';
  }

  findAll() {
    return `This action returns all diasvacaciones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} diasvacacione`;
  }

  update(id: number, updateDiasvacacioneDto: UpdateDiasvacacioneDto) {
    return `This action updates a #${id} diasvacacione`;
  }

  remove(id: number) {
    return `This action removes a #${id} diasvacacione`;
  }
}
