import { Injectable } from '@nestjs/common';
import { CreateTipopermisoDto } from './dto/create-tipopermiso.dto';
import { UpdateTipopermisoDto } from './dto/update-tipopermiso.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TipoPermiso } from './entities/TipoPermiso.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TipopermisoService {
  constructor(
    @InjectRepository(TipoPermiso)
    private readonly tipoPermisoRepository: Repository<TipoPermiso>,
  ) {}

  create(createTipopermisoDto: CreateTipopermisoDto) {
    return 'This action adds a new tipopermiso';
  }

  findAll() {
    return `This action returns all tipopermiso`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipopermiso`;
  }

  update(id: number, updateTipopermisoDto: UpdateTipopermisoDto) {
    return `This action updates a #${id} tipopermiso`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipopermiso`;
  }
}
