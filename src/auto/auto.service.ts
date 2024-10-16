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
    try {
      const autos = await this.autoRepository.find();

      const wrapper: Wrapper<Auto> = {
        message: 'autos found',
        responseCode: 200,
        result: autos,
      };

      return wrapper;
    } catch (error) {
      const autos = await this.autoRepository.find();

      const wrapper: Wrapper<Auto> = {
        message: 'Error getting autos',
        responseCode: 500,
        result: null,
      };

      return wrapper;
    }
  }

  async findOne(id: number) {
    try {
      const autoFound = await this.autoRepository.findOne({
        where: { idAuto: id },
      });

      const wrapper: SingleWrapper<Auto> = {
        message: 'auto found',
        responseCode: 200,
        result: autoFound,
      };

      return wrapper;
    } catch (error) {
      const wrapper: SingleWrapper<Auto> = {
        message: 'auto not found',
        responseCode: 404,
        result: null,
      };
      return wrapper;
    }
  }

  async update(id: number, updateAutoDto: UpdateAutoDto) {
    const autoUpdated = await this.autoRepository.update(id, updateAutoDto);

    return autoUpdated;
  }

  async remove(id: number) {
    await this.autoRepository.delete(id);
  }
}
