import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEstadoDto } from './dto/create-estado.dto';
import { UpdateEstadoDto } from './dto/update-estado.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Estado } from './entities/Estado.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EstadoService {
  constructor(
    @InjectRepository(Estado)
    private readonly estadoRepository: Repository<Estado>,
  ) {}

  async create(createEstadoDto: CreateEstadoDto): Promise<Estado> {
    const nuevoEstado = this.estadoRepository.create(createEstadoDto);
    return await this.estadoRepository.save(nuevoEstado);
  }

  async findAll(): Promise<Estado[]> {
    return await this.estadoRepository.find();
  }

  async findOne(id: number): Promise<Estado> {
    const estado = await this.estadoRepository.findOne({ where: { idEstado: id } });
    if (!estado) {
      throw new NotFoundException(`Estado con id ${id} no encontrado`);
    }
    return estado;
  }

  async update(id: number, updateEstadoDto: UpdateEstadoDto): Promise<Estado> {
    const estado = await this.findOne(id);
    const estadoActualizado = this.estadoRepository.merge(estado, updateEstadoDto);
    return await this.estadoRepository.save(estadoActualizado);
  }

  async remove(id: number): Promise<void> {
    const estado = await this.findOne(id);
    await this.estadoRepository.remove(estado);
  }
}
