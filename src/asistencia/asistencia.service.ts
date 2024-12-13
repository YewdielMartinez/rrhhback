import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAsistenciaDto } from './dto/create-asistencia.dto';
import { FinalizarAsistenciaDto } from './dto/finalizar-asistencia.dto';
import { UpdateAsistenciaDto } from './dto/update-asistencia.dto';
import { Asistencia } from './entities/Asistencia.entity';

@Injectable()
export class AsistenciaService {
  constructor(
    @InjectRepository(Asistencia)
    private readonly asistenciaRepository: Repository<Asistencia>,
  ) {}

  create(createAsistenciaDto: CreateAsistenciaDto) {
    return this.asistenciaRepository.save(createAsistenciaDto);
  }

  async findAll() {
    return await this.asistenciaRepository.find();
  }

  async findOne(id: number) {
    return await this.asistenciaRepository.findOne({
      where: { idAsistencia: id },
    });
  }

  async findByEmpleado(id: number) {
    return await this.asistenciaRepository.findBy({
      idEmpleado: id,
    });
  }

  async findBySesionTrabajo(id: number) {
    return await this.asistenciaRepository.findBy({
      idSesionTrabajo: id,
    });
  }

  async update(id: number, updateAsistenciaDto: UpdateAsistenciaDto) {
    return await this.asistenciaRepository.update(
      id,
      updateAsistenciaDto,
    );
  }

  async finalizarAsistencia(
    id: number,
    { asistenciaFin }: FinalizarAsistenciaDto,
  ) {
    const asistencia = await this.asistenciaRepository.findOne({
      where: { idAsistencia: id },
    });
  
    if (!asistencia) {
      throw new NotFoundException(`Asistencia with ID ${id} not found`);
    }
  
    asistencia.asistenciaFin = asistenciaFin;
  
    return await this.asistenciaRepository.save(asistencia); 
    
  }

  async remove(id: number) {
    return await this.asistenciaRepository.delete(id);
  }
}
