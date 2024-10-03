import { Injectable } from '@nestjs/common';
import { CreateEstadocivilDto } from './dto/create-estadocivil.dto';
import { UpdateEstadocivilDto } from './dto/update-estadocivil.dto';

@Injectable()
export class EstadocivilService {
  create(createEstadocivilDto: CreateEstadocivilDto) {
    return 'This action adds a new estadocivil';
  }

  findAll() {
    return `This action returns all estadocivil`;
  }

  findOne(id: number) {
    return `This action returns a #${id} estadocivil`;
  }

  update(id: number, updateEstadocivilDto: UpdateEstadocivilDto) {
    return `This action updates a #${id} estadocivil`;
  }

  remove(id: number) {
    return `This action removes a #${id} estadocivil`;
  }
}
