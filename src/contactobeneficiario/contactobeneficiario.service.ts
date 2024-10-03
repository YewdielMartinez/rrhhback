import { Injectable } from '@nestjs/common';
import { CreateContactobeneficiarioDto } from './dto/create-contactobeneficiario.dto';
import { UpdateContactobeneficiarioDto } from './dto/update-contactobeneficiario.dto';

@Injectable()
export class ContactobeneficiarioService {
  create(createContactobeneficiarioDto: CreateContactobeneficiarioDto) {
    return 'This action adds a new contactobeneficiario';
  }

  findAll() {
    return `This action returns all contactobeneficiario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contactobeneficiario`;
  }

  update(id: number, updateContactobeneficiarioDto: UpdateContactobeneficiarioDto) {
    return `This action updates a #${id} contactobeneficiario`;
  }

  remove(id: number) {
    return `This action removes a #${id} contactobeneficiario`;
  }
}
