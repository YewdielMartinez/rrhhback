import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTipoasistenciaDto } from './dto/create-tipoasistencia.dto';
import { UpdateTipoasistenciaDto } from './dto/update-tipoasistencia.dto';
import { TipoAsistencia } from './entities/TipoAsistencia.entity';

@Injectable()
export class TipoasistenciaService {
  constructor(
    @InjectRepository(TipoAsistencia)
    private readonly tipoAsistenciaRepository: Repository<TipoAsistencia>,
  ) {}

  async create(createTipoasistenciaDto: CreateTipoasistenciaDto): Promise<TipoAsistencia> {
    const nuevoTipoAsistencia = this.tipoAsistenciaRepository.create(createTipoasistenciaDto);
    return this.tipoAsistenciaRepository.save(nuevoTipoAsistencia);
  }

  async findAll(): Promise<TipoAsistencia[]> {
    return this.tipoAsistenciaRepository.find();
  }

  async findOne(id: number): Promise<TipoAsistencia> {
    const tipoAsistencia = await this.tipoAsistenciaRepository.findOne({ where: { idTipoAsistencia: id } });
    if (!tipoAsistencia) {
      throw new NotFoundException(`TipoAsistencia con ID ${id} no encontrado`);
    }
    return tipoAsistencia;
  }

  async update(id: number, updateTipoasistenciaDto: UpdateTipoasistenciaDto): Promise<TipoAsistencia> {
    const tipoAsistencia = await this.findOne(id);
    Object.assign(tipoAsistencia, updateTipoasistenciaDto);
    return this.tipoAsistenciaRepository.save(tipoAsistencia);
  }

  async remove(id: number): Promise<void> {
    const tipoAsistencia = await this.findOne(id);
    await this.tipoAsistenciaRepository.remove(tipoAsistencia);
  }
}