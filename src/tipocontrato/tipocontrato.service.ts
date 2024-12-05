import { Injectable } from '@nestjs/common';
import { CreateTipocontratoDto } from './dto/create-tipocontrato.dto';
import { UpdateTipocontratoDto } from './dto/update-tipocontrato.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TipoContrato } from './entities/TipoContrato.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TipocontratoService {
  constructor(
    @InjectRepository(TipoContrato)
    private readonly tipoContratoRepository: Repository<TipoContrato>,
  ) {}

  async create(createTipocontratoDto: CreateTipocontratoDto): Promise<TipoContrato> {
    const newTipoContrato = this.tipoContratoRepository.create(createTipocontratoDto);
    return await this.tipoContratoRepository.save(newTipoContrato);
  }

  async findAll(): Promise<TipoContrato[]> {
    return await this.tipoContratoRepository.find();
  }

  async findOne(id: number): Promise<TipoContrato> {
    const tipoContrato = await this.tipoContratoRepository.findOne({ where: { idTipoContrato: id } });
    if (!tipoContrato) {
      throw new Error(`TipoContrato with ID ${id} not found`);
    }
    return tipoContrato;
  }

  async update(id: number, updateTipocontratoDto: UpdateTipocontratoDto): Promise<TipoContrato> {
    const tipoContrato = await this.findOne(id);
    Object.assign(tipoContrato, updateTipocontratoDto);
    return await this.tipoContratoRepository.save(tipoContrato);
  }

  async remove(id: number): Promise<void> {
    const tipoContrato = await this.findOne(id);
    await this.tipoContratoRepository.remove(tipoContrato);
  }
}
