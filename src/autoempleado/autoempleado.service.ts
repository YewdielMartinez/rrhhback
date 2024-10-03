import { Injectable } from '@nestjs/common';
import { CreateAutoempleadoDto } from './dto/create-autoempleado.dto';
import { UpdateAutoempleadoDto } from './dto/update-autoempleado.dto';

@Injectable()
export class AutoempleadoService {
  create(createAutoempleadoDto: CreateAutoempleadoDto) {
    return 'This action adds a new autoempleado';
  }

  findAll() {
    return `This action returns all autoempleado`;
  }

  findOne(id: number) {
    return `This action returns a #${id} autoempleado`;
  }

  update(id: number, updateAutoempleadoDto: UpdateAutoempleadoDto) {
    return `This action updates a #${id} autoempleado`;
  }

  remove(id: number) {
    return `This action removes a #${id} autoempleado`;
  }
}
