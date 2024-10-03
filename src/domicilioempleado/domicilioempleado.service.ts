import { Injectable } from '@nestjs/common';
import { CreateDomicilioempleadoDto } from './dto/create-domicilioempleado.dto';
import { UpdateDomicilioempleadoDto } from './dto/update-domicilioempleado.dto';

@Injectable()
export class DomicilioempleadoService {
  create(createDomicilioempleadoDto: CreateDomicilioempleadoDto) {
    return 'This action adds a new domicilioempleado';
  }

  findAll() {
    return `This action returns all domicilioempleado`;
  }

  findOne(id: number) {
    return `This action returns a #${id} domicilioempleado`;
  }

  update(id: number, updateDomicilioempleadoDto: UpdateDomicilioempleadoDto) {
    return `This action updates a #${id} domicilioempleado`;
  }

  remove(id: number) {
    return `This action removes a #${id} domicilioempleado`;
  }
}
