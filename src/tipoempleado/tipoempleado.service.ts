import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTipoempleadoDto } from './dto/create-tipoempleado.dto';
import { UpdateTipoempleadoDto } from './dto/update-tipoempleado.dto';
import { TipoEmpleado } from './entities/TipoEmpleado.entity';

@Injectable()
export class TipoempleadoService {
  constructor(
    @InjectRepository(TipoEmpleado)
    private readonly tipoEmpleadoRepository: Repository<TipoEmpleado>,
  ) {}

  async create(createTipoempleadoDto: CreateTipoempleadoDto): Promise<TipoEmpleado> {
    const nuevoTipoEmpleado = this.tipoEmpleadoRepository.create(createTipoempleadoDto);
    return this.tipoEmpleadoRepository.save(nuevoTipoEmpleado);
  }

  async findAll(): Promise<TipoEmpleado[]> {
    return this.tipoEmpleadoRepository.find();
  }

  async findOne(id: number): Promise<TipoEmpleado> {
    const tipoEmpleado = await this.tipoEmpleadoRepository.findOne({ where: { idTipoEmpleado: id } });
    if (!tipoEmpleado) {
      throw new NotFoundException(`TipoEmpleado con ID ${id} no encontrado`);
    }
    return tipoEmpleado;
  }

  async update(id: number, updateTipoempleadoDto: UpdateTipoempleadoDto): Promise<TipoEmpleado> {
    const tipoEmpleado = await this.findOne(id);
    Object.assign(tipoEmpleado, updateTipoempleadoDto);
    return this.tipoEmpleadoRepository.save(tipoEmpleado);
  }

  async remove(id: number): Promise<void> {
    const tipoEmpleado = await this.findOne(id);
    await this.tipoEmpleadoRepository.remove(tipoEmpleado);
  }
}
