import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCiudadDto } from './dto/create-ciudad.dto';
import { UpdateCiudadDto } from './dto/update-ciudad.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Ciudad } from './entities/Ciudad.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CiudadService {
  constructor(
    @InjectRepository(Ciudad)
    private readonly ciudadRepository: Repository<Ciudad>,
  ) {}

  async create(createCiudadDto: CreateCiudadDto): Promise<Ciudad> {
    const nuevaCiudad = this.ciudadRepository.create(createCiudadDto);
    return await this.ciudadRepository.save(nuevaCiudad);
  }

  async findAll(): Promise<Ciudad[]> {
    return await this.ciudadRepository.find();
  }

  async findOne(id: number): Promise<Ciudad> {
    const ciudad = await this.ciudadRepository.findOne({ where: { idCiudad: id } });
    if (!ciudad) {
      throw new NotFoundException(`Ciudad con id ${id} no encontrada`);
    }
    return ciudad;
  }

  async update(id: number, updateCiudadDto: UpdateCiudadDto): Promise<Ciudad> {
    const ciudad = await this.findOne(id);
    const ciudadActualizada = this.ciudadRepository.merge(ciudad, updateCiudadDto);
    return await this.ciudadRepository.save(ciudadActualizada);
  }

  async remove(id: number): Promise<void> {
    const ciudad = await this.findOne(id);
    await this.ciudadRepository.remove(ciudad);
  }
}
