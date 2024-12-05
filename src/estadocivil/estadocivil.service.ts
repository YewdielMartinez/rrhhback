import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEstadocivilDto } from './dto/create-estadocivil.dto';
import { UpdateEstadocivilDto } from './dto/update-estadocivil.dto';
import { EstadoCivil } from './entities/EstadoCivil.entity';

@Injectable()
export class EstadocivileService {
  constructor(
    @InjectRepository(EstadoCivil)
    private readonly estadoCivilRepository: Repository<EstadoCivil>,
  ) {}

  async create(createEstadocivilDto: CreateEstadocivilDto): Promise<EstadoCivil> {
    const nuevoEstadoCivil = this.estadoCivilRepository.create(createEstadocivilDto);
    return this.estadoCivilRepository.save(nuevoEstadoCivil);
  }

  async findAll(): Promise<EstadoCivil[]> {
    return this.estadoCivilRepository.find();
  }

  async findOne(id: number): Promise<EstadoCivil> {
    const estadoCivil = await this.estadoCivilRepository.findOne({ where: { idEstadoCivil: id } });
    if (!estadoCivil) {
      throw new NotFoundException(`EstadoCivil con ID ${id} no encontrado`);
    }
    return estadoCivil;
  }

  async update(id: number, updateEstadocivilDto: UpdateEstadocivilDto): Promise<EstadoCivil> {
    const estadoCivil = await this.findOne(id);
    Object.assign(estadoCivil, updateEstadocivilDto);
    return this.estadoCivilRepository.save(estadoCivil);
  }

  async remove(id: number): Promise<void> {
    const estadoCivil = await this.findOne(id);
    await this.estadoCivilRepository.remove(estadoCivil);
  }
}
