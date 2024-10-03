import { Injectable } from '@nestjs/common';
import { CreateTipoempleadoDto } from './dto/create-tipoempleado.dto';
import { UpdateTipoempleadoDto } from './dto/update-tipoempleado.dto';

@Injectable()
export class TipoempleadoService {
  create(createTipoempleadoDto: CreateTipoempleadoDto) {
    return 'This action adds a new tipoempleado';
  }

  findAll() {
    return `This action returns all tipoempleado`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoempleado`;
  }

  update(id: number, updateTipoempleadoDto: UpdateTipoempleadoDto) {
    return `This action updates a #${id} tipoempleado`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipoempleado`;
  }
}
