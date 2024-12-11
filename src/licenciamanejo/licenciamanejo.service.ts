import { Injectable } from '@nestjs/common';
import { CreateLicenciamanejoDto } from './dto/create-licenciamanejo.dto';
import { UpdateLicenciamanejoDto } from './dto/update-licenciamanejo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { LicenciaManejo } from './entities/LicenciaManejo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LicenciamanejoService {
  constructor(
    @InjectRepository(LicenciaManejo)
    private readonly licenciaManejoRepository: Repository<LicenciaManejo>,
  ) {}

  create(createLicenciamanejoDto: CreateLicenciamanejoDto) {
    return 'This action adds a new licenciamanejo';
  }

  findAll() {
    return `This action returns all licenciamanejo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} licenciamanejo`;
  }

  update(id: number, updateLicenciamanejoDto: UpdateLicenciamanejoDto) {
    return `This action updates a #${id} licenciamanejo`;
  }

  remove(id: number) {
    return `This action removes a #${id} licenciamanejo`;
  }
}
