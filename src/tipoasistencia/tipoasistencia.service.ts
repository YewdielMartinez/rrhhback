import { Injectable } from '@nestjs/common';
import { CreateTipoasistenciaDto } from './dto/create-tipoasistencia.dto';
import { UpdateTipoasistenciaDto } from './dto/update-tipoasistencia.dto';

@Injectable()
export class TipoasistenciaService {
  create(createTipoasistenciaDto: CreateTipoasistenciaDto) {
    return 'This action adds a new tipoasistencia';
  }

  findAll() {
    return `This action returns all tipoasistencia`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoasistencia`;
  }

  update(id: number, updateTipoasistenciaDto: UpdateTipoasistenciaDto) {
    return `This action updates a #${id} tipoasistencia`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipoasistencia`;
  }
}
