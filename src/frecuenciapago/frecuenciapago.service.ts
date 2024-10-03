import { Injectable } from '@nestjs/common';
import { CreateFrecuenciapagoDto } from './dto/create-frecuenciapago.dto';
import { UpdateFrecuenciapagoDto } from './dto/update-frecuenciapago.dto';

@Injectable()
export class FrecuenciapagoService {
  create(createFrecuenciapagoDto: CreateFrecuenciapagoDto) {
    return 'This action adds a new frecuenciapago';
  }

  findAll() {
    return `This action returns all frecuenciapago`;
  }

  findOne(id: number) {
    return `This action returns a #${id} frecuenciapago`;
  }

  update(id: number, updateFrecuenciapagoDto: UpdateFrecuenciapagoDto) {
    return `This action updates a #${id} frecuenciapago`;
  }

  remove(id: number) {
    return `This action removes a #${id} frecuenciapago`;
  }
}
