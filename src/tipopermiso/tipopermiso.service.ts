import { Injectable } from '@nestjs/common';
import { CreateTipopermisoDto } from './dto/create-tipopermiso.dto';
import { UpdateTipopermisoDto } from './dto/update-tipopermiso.dto';

@Injectable()
export class TipopermisoService {
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
