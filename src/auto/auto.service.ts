import { Injectable } from '@nestjs/common';
import { CreateAutoDto } from './dto/create-auto.dto';
import { UpdateAutoDto } from './dto/update-auto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Auto } from './entities/Auto.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AutoService {

  constructor(
    @InjectRepository(Auto)
    private readonly autoRepository: Repository<Auto>,
  ) {}

  create(createAutoDto: CreateAutoDto) {
    return this.autoRepository.save(createAutoDto);
  }

  findAll() {
    return this.autoRepository.find();
  }

  findOne(id: number) {
    return this.autoRepository.findOne({ where: { idAuto: id } });
  }

  async update(id: number, updateAutoDto: UpdateAutoDto) {
    await this.autoRepository.update(id, updateAutoDto);
  }

  async remove(id: number) {
    await this.autoRepository.delete(id);
  }
}
