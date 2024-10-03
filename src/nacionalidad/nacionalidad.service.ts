import { Injectable } from '@nestjs/common';
import { CreateNacionalidadDto } from './dto/create-nacionalidad.dto';
import { UpdateNacionalidadDto } from './dto/update-nacionalidad.dto';

@Injectable()
export class NacionalidadService {
  create(createNacionalidadDto: CreateNacionalidadDto) {
    return 'This action adds a new nacionalidad';
  }

  findAll() {
    return `This action returns all nacionalidad`;
  }

  findOne(id: number) {
    return `This action returns a #${id} nacionalidad`;
  }

  update(id: number, updateNacionalidadDto: UpdateNacionalidadDto) {
    return `This action updates a #${id} nacionalidad`;
  }

  remove(id: number) {
    return `This action removes a #${id} nacionalidad`;
  }
}
