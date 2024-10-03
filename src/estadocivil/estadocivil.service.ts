import { Injectable } from '@nestjs/common';
import { CreateEstadocivilDto } from './dto/create-estadocivil.dto';
import { UpdateEstadocivilDto } from './dto/update-estadocivil.dto';

@Injectable()
export class EstadocivileService {
  create(createEstadocivileDto: CreateEstadocivilDto) {
    return 'This action adds a new estadocivile';
  }

  findAll() {
    return `This action returns all estadocivile`;
  }

  findOne(id: number) {
    return `This action returns a #${id} estadocivile`;
  }

  update(id: number, updateEstadocivileDto: UpdateEstadocivilDto) {
    return `This action updates a #${id} estadocivile`;
  }

  remove(id: number) {
    return `This action removes a #${id} estadocivile`;
  }
}
