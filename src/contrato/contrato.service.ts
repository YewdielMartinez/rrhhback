import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateContratoDto } from './dto/create-contrato.dto';
import { UpdateContratoDto } from './dto/update-contrato.dto';
import { Contrato } from './entities/Contrato.entity';

@Injectable()
export class ContratoService {
  constructor(
    @InjectRepository(Contrato)
    private readonly contratoRepository: Repository<Contrato>,
  ) {}

  async create(createContratoDto: CreateContratoDto): Promise<Contrato> {
    const nuevoContrato = this.contratoRepository.create(createContratoDto);
    return this.contratoRepository.save(nuevoContrato);
  }

  async findAll(): Promise<Contrato[]> {
    return this.contratoRepository.find();
  }

  async findOne(id: number): Promise<Contrato> {
    const contrato = await this.contratoRepository.findOne({ where: { idContrato: id } });
    if (!contrato) {
      throw new NotFoundException(`Contrato con ID ${id} no encontrado`);
    }
    return contrato;
  }

  async update(id: number, updateContratoDto: UpdateContratoDto): Promise<Contrato> {
    const contrato = await this.findOne(id);
    Object.assign(contrato, updateContratoDto);
    return this.contratoRepository.save(contrato);
  }

  async remove(id: number): Promise<void> {
    const contrato = await this.findOne(id);
    await this.contratoRepository.remove(contrato);
  }
}
