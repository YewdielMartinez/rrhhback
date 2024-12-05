import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDomicilioDto } from './dto/create-domicilio.dto';
import { UpdateDomicilioDto } from './dto/update-domicilio.dto';
import { Domicilio } from './entities/Domicilio.entity';

@Injectable()
export class DomicilioService {
  constructor(
    @InjectRepository(Domicilio)
    private readonly domicilioRepository: Repository<Domicilio>,
  ) {}

  async create(createDomicilioDto: CreateDomicilioDto): Promise<Domicilio> {
    const nuevoDomicilio = this.domicilioRepository.create(createDomicilioDto);
    return this.domicilioRepository.save(nuevoDomicilio);
  }

  async findAll(): Promise<Domicilio[]> {
    return this.domicilioRepository.find();
  }

  async findOne(id: number): Promise<Domicilio> {
    const domicilio = await this.domicilioRepository.findOne({ where: { idDomicilio: id } });
    if (!domicilio) {
      throw new NotFoundException(`Domicilio con ID ${id} no encontrado`);
    }
    return domicilio;
  }

  async update(id: number, updateDomicilioDto: UpdateDomicilioDto): Promise<Domicilio> {
    const domicilio = await this.findOne(id);
    Object.assign(domicilio, updateDomicilioDto);
    return this.domicilioRepository.save(domicilio);
  }

  async remove(id: number): Promise<void> {
    const domicilio = await this.findOne(id);
    await this.domicilioRepository.remove(domicilio);
  }
}
