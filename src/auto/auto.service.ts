import { Injectable } from '@nestjs/common';
import { CreateAutoDto } from './dto/create-auto.dto';
import { UpdateAutoDto } from './dto/update-auto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Auto } from './entities/Auto.entity';
import { Repository, UpdateResult } from 'typeorm';
import { Wrapper } from 'src/common/Wrapper';
import { SingleWrapper } from 'src/common/SingleWrapper';

@Injectable()
export class AutoService {
  constructor(
    @InjectRepository(Auto)
    private readonly autoRepository: Repository<Auto>,
  ) {}

  create(createAutoDto: CreateAutoDto) {
    return this.autoRepository.save(createAutoDto);
  }

  async findAll() {
    return await this.autoRepository.find();
  }

  async findOne(id: number) {
    return await this.autoRepository.findOne({
      where: { idAuto: id },
    });
  }

  async update(id: number, updateAutoDto: UpdateAutoDto) {
    const autoUpdated = await this.autoRepository.update(id, updateAutoDto);

    return autoUpdated;
  }

  async remove(id: number) {
    await this.autoRepository.delete(id);
  }
}
