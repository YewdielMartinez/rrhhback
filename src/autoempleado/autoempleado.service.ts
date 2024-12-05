import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAutoempleadoDto } from './dto/create-autoempleado.dto';
import { UpdateAutoempleadoDto } from './dto/update-autoempleado.dto';
import { AutoEmpleado } from './entities/AutoEmpleado.entity';

@Injectable()
export class AutoempleadoService {

  constructor(
    @InjectRepository(AutoEmpleado)
    private readonly autoEmpleadoRepository: Repository<AutoEmpleado>,
  ) {}

  async create(createAutoempleadoDto: CreateAutoempleadoDto): Promise<AutoEmpleado> {
    const nuevoAutoEmpleado = this.autoEmpleadoRepository.create(createAutoempleadoDto);
    return this.autoEmpleadoRepository.save(nuevoAutoEmpleado);
  }

  async findAll(): Promise<AutoEmpleado[]> {
    return this.autoEmpleadoRepository.find();
  }

  async findOne(id: number): Promise<AutoEmpleado> {
    const autoEmpleado = await this.autoEmpleadoRepository.findOne({ where: { idRegistro: id } });
    if (!autoEmpleado) {
      throw new NotFoundException(`AutoEmpleado con ID ${id} no encontrado`);
    }
    return autoEmpleado;
  }

  async update(id: number, updateAutoempleadoDto: UpdateAutoempleadoDto): Promise<AutoEmpleado> {
    const autoEmpleado = await this.findOne(id);
    Object.assign(autoEmpleado, updateAutoempleadoDto);
    return this.autoEmpleadoRepository.save(autoEmpleado);
  }

  async remove(id: number): Promise<void> {
    const autoEmpleado = await this.findOne(id);
    await this.autoEmpleadoRepository.remove(autoEmpleado);
  }
}
