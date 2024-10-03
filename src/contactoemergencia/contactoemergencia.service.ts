import { Injectable } from '@nestjs/common';
import { CreateContactoemergenciaDto } from './dto/create-contactoemergencia.dto';
import { UpdateContactoemergenciaDto } from './dto/update-contactoemergencia.dto';

@Injectable()
export class ContactoemergenciaService {
  create(createContactoemergenciaDto: CreateContactoemergenciaDto) {
    return 'This action adds a new contactoemergencia';
  }

  findAll() {
    return `This action returns all contactoemergencia`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contactoemergencia`;
  }

  update(id: number, updateContactoemergenciaDto: UpdateContactoemergenciaDto) {
    return `This action updates a #${id} contactoemergencia`;
  }

  remove(id: number) {
    return `This action removes a #${id} contactoemergencia`;
  }
}
