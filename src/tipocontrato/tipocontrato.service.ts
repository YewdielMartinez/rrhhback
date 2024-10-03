import { Injectable } from '@nestjs/common';
import { CreateTipocontratoDto } from './dto/create-tipocontrato.dto';
import { UpdateTipocontratoDto } from './dto/update-tipocontrato.dto';

@Injectable()
export class TipocontratoService {
  create(createTipocontratoDto: CreateTipocontratoDto) {
    return 'This action adds a new tipocontrato';
  }

  findAll() {
    return `This action returns all tipocontrato`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipocontrato`;
  }

  update(id: number, updateTipocontratoDto: UpdateTipocontratoDto) {
    return `This action updates a #${id} tipocontrato`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipocontrato`;
  }
}
