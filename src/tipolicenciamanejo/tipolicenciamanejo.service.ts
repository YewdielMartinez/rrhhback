import { Injectable } from '@nestjs/common';
import { CreateTipolicenciamanejoDto } from './dto/create-tipolicenciamanejo.dto';
import { UpdateTipolicenciamanejoDto } from './dto/update-tipolicenciamanejo.dto';

@Injectable()
export class TipolicenciamanejoService {
  create(createTipolicenciamanejoDto: CreateTipolicenciamanejoDto) {
    return 'This action adds a new tipolicenciamanejo';
  }

  findAll() {
    return `This action returns all tipolicenciamanejo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipolicenciamanejo`;
  }

  update(id: number, updateTipolicenciamanejoDto: UpdateTipolicenciamanejoDto) {
    return `This action updates a #${id} tipolicenciamanejo`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipolicenciamanejo`;
  }
}
