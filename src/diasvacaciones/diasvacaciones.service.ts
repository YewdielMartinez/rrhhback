import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDiasvacacionesDto } from './dto/create-diasvacaciones.dto';
import { UpdateDiasvacacionesDto } from './dto/update-diasvacaciones.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DiasVacaciones } from './entities/DiasVacaciones.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DiasvacacionesService {
  constructor(
    @InjectRepository(DiasVacaciones)
    private readonly diasVacacionesRepository: Repository<DiasVacaciones>,
  ) {}

  async create(createDiasvacacioneDto: CreateDiasvacacionesDto): Promise<DiasVacaciones> {
    const newDiasVacaciones = this.diasVacacionesRepository.create(createDiasvacacioneDto);
    return await this.diasVacacionesRepository.save(newDiasVacaciones);
  }

  async findAll(): Promise<DiasVacaciones[]> {
    return await this.diasVacacionesRepository.find();
  }

  async findOne(id: number): Promise<DiasVacaciones> {
    const diasVacaciones = await this.diasVacacionesRepository.findOne({ where: { idDiasVacaciones: id } });
    if (!diasVacaciones) {
      throw new NotFoundException(`DiasVacaciones with ID ${id} not found`);
    }
    return diasVacaciones;
  }

  async update(id: number, updateDiasvacacioneDto: UpdateDiasvacacionesDto): Promise<DiasVacaciones> {
    const diasVacaciones = await this.findOne(id);
    Object.assign(diasVacaciones, updateDiasvacacioneDto);
    return await this.diasVacacionesRepository.save(diasVacaciones);
  }

  async remove(id: number): Promise<void> {
    const diasVacaciones = await this.findOne(id);
    await this.diasVacacionesRepository.remove(diasVacaciones);
  }
}
