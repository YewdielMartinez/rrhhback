import { Injectable } from '@nestjs/common';
import { CreateAsistenciaDto } from './dto/create-asistencia.dto';
import { UpdateAsistenciaDto } from './dto/update-asistencia.dto';
import { Asistencia } from './entities/Asistencia.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SingleWrapper } from 'src/common/SingleWrapper';

@Injectable()
export class AsistenciaService {
  constructor(
    @InjectRepository(Asistencia)
    private readonly asistenciaRepository: Repository<Asistencia>,
  ) {}

  create(createAsistenciaDto: CreateAsistenciaDto) {
    return this.asistenciaRepository.save(createAsistenciaDto);
  }

  findAll() {
    return this.asistenciaRepository.find();
  }

  async findOne(id: number) {
    const asistencia = await this.asistenciaRepository.findOne({ where: { idAsistencia: id } });

    const wrapper: SingleWrapper<Asistencia> = {
      message: "Encontrado correctamente",
      responseCode: 200,
      result: asistencia
    }

    return wrapper
  }

  findByUser(id: number) {
    return this.asistenciaRepository.findOne({ where: { idEmpleado: id } });
  }

  async update(id: number, updateAsistenciaDto: UpdateAsistenciaDto) {
    return await this.asistenciaRepository.update(id, updateAsistenciaDto);
  }

  async remove(id: number) {
    return await this.asistenciaRepository.delete(id);
  }
}
