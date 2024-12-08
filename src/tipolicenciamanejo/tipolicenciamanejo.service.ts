import { Injectable } from '@nestjs/common';
import { CreateTipolicenciamanejoDto } from './dto/create-tipolicenciamanejo.dto';
import { UpdateTipolicenciamanejoDto } from './dto/update-tipolicenciamanejo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TipoLicenciaManejo } from './entities/TipoLicenciaManejo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TipolicenciamanejoService {
  constructor(
    @InjectRepository(TipoLicenciaManejo)
    private readonly tipoLicenciaManejoRepository: Repository<TipoLicenciaManejo>,
  ) {}

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
