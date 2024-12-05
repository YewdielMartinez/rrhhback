import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNacionalidadDto } from './dto/create-nacionalidad.dto';
import { UpdateNacionalidadDto } from './dto/update-nacionalidad.dto';
import { Nacionalidad } from './entities/Nacionalidad.entity';

@Injectable()
export class NacionalidadService {
  constructor(
    @InjectRepository(Nacionalidad)
    private readonly nacionalidadRepository: Repository<Nacionalidad>,
  ) {}

  async create(createNacionalidadDto: CreateNacionalidadDto): Promise<Nacionalidad> {
    const nuevaNacionalidad = this.nacionalidadRepository.create(createNacionalidadDto);
    return this.nacionalidadRepository.save(nuevaNacionalidad);
  }

  async findAll(): Promise<Nacionalidad[]> {
    return this.nacionalidadRepository.find();
  }

  async findOne(id: number): Promise<Nacionalidad> {
    const nacionalidad = await this.nacionalidadRepository.findOne({ where: { idNacionalidad: id } });
    if (!nacionalidad) {
      throw new NotFoundException(`Nacionalidad con ID ${id} no encontrada`);
    }
    return nacionalidad;
  }

  async update(id: number, updateNacionalidadDto: UpdateNacionalidadDto): Promise<Nacionalidad> {
    const nacionalidad = await this.findOne(id);
    Object.assign(nacionalidad, updateNacionalidadDto);
    return this.nacionalidadRepository.save(nacionalidad);
  }

  async remove(id: number): Promise<void> {
    const nacionalidad = await this.findOne(id);
    await this.nacionalidadRepository.remove(nacionalidad);
  }
}
