import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePaisDto } from './dto/create-pais.dto';
import { UpdatePaisDto } from './dto/update-pais.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pais } from './entities/Pais.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PaisService {
  constructor(
    @InjectRepository(Pais)
    private readonly paisRepository: Repository<Pais>,
  ) {}

  async create(createPaisDto: CreatePaisDto): Promise<Pais> {
    const nuevoPais = this.paisRepository.create(createPaisDto);
    return await this.paisRepository.save(nuevoPais);
  }

  async findAll(): Promise<Pais[]> {
    return await this.paisRepository.find();
  }

  async findOne(id: number): Promise<Pais> {
    const pais = await this.paisRepository.findOne({ where: { idPais: id } });
    if (!pais) {
      throw new NotFoundException(`Pais con id ${id} no encontrado`);
    }
    return pais;
  }

  async update(id: number, updatePaisDto: UpdatePaisDto): Promise<Pais> {
    const pais = await this.findOne(id);
    const paisActualizado = this.paisRepository.merge(pais, updatePaisDto);
    return await this.paisRepository.save(paisActualizado);
  }

  async remove(id: number): Promise<void> {
    const pais = await this.findOne(id);
    await this.paisRepository.remove(pais);
  }
}
