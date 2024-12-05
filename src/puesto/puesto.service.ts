import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePuestoDto } from './dto/create-puesto.dto';
import { UpdatePuestoDto } from './dto/update-puesto.dto';
import { Puesto } from './entities/Puesto.entity';

@Injectable()
export class PuestoService {
  constructor(
    @InjectRepository(Puesto)
    private readonly puestoRepository: Repository<Puesto>,
  ) {}

  async create(createPuestoDto: CreatePuestoDto): Promise<Puesto> {
    const nuevoPuesto = this.puestoRepository.create(createPuestoDto);
    return this.puestoRepository.save(nuevoPuesto);
  }

  async findAll(): Promise<Puesto[]> {
    return this.puestoRepository.find();
  }

  async findOne(id: number): Promise<Puesto> {
    const puesto = await this.puestoRepository.findOne({ where: { idPuesto: id } });
    if (!puesto) {
      throw new NotFoundException(`Puesto con ID ${id} no encontrado`);
    }
    return puesto;
  }

  async update(id: number, updatePuestoDto: UpdatePuestoDto): Promise<Puesto> {
    const puesto = await this.findOne(id);
    Object.assign(puesto, updatePuestoDto);
    return this.puestoRepository.save(puesto);
  }

  async remove(id: number): Promise<void> {
    const puesto = await this.findOne(id);
    await this.puestoRepository.remove(puesto);
  }
}