import { Injectable } from '@nestjs/common';
import { CreateAsistenciaDto } from './dto/create-asistencia.dto';
import { UpdateAsistenciaDto } from './dto/update-asistencia.dto';
import { Asistencia } from './entities/Asistencia.entity';
import { Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SingleWrapper } from 'src/common/SingleWrapper';
import { FinalizarAsistenciaDto } from './dto/finalizar-asistencia.dto';
import { Wrapper } from 'src/common/Wrapper';

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
    const asistencias = await this.asistenciaRepository.find();
    const wrapper: Wrapper<Asistencia> = {
      message: 'asistencias founded',
      responseCode: 200,
      result: asistencias,
    };
    return wrapper;
  }

  async findOne(id: number) {
    const asistencia = await this.asistenciaRepository.findOne({
      where: { idAsistencia: id },
    });

    const wrapper: SingleWrapper<Asistencia> = {
      message: 'Encontrado correctamente',
      responseCode: 200,
      result: asistencia,
    };

    return wrapper;
  }

  async findByUser(id: number) {
    const asistencias = await this.asistenciaRepository.findBy({
      idEmpleado: id,
    });

    const wrapper: Wrapper<Asistencia> = {
      message: 'Encontrado correctamente',
      responseCode: 200,
      result: asistencias,
    };

    return wrapper;
  }

  async update(id: number, updateAsistenciaDto: UpdateAsistenciaDto) {
    const asistenciaUpdated = await this.asistenciaRepository.update(
      id,
      updateAsistenciaDto,
    );
    const wrapper: SingleWrapper<UpdateResult> = {
      message: 'Encontrado correctamente',
      responseCode: 200,
      result: asistenciaUpdated,
    };
    return wrapper;
  }

  async finalizarAsistencia(
    id: number,
    { asistenciaFin }: FinalizarAsistenciaDto,
  ) {
    let wrapper: SingleWrapper<Asistencia> = {
      message: 'asistencia not found',
      responseCode: 404,
      result: null,
    };
    const asistencia = await this.asistenciaRepository.findOne({
      where: { idAsistencia: id },
    });

    if (!asistencia) {
      return wrapper;
    }

    asistencia.asistenciaFin = asistenciaFin;

    // Guardar los cambios en la base de datos
    const newAsistencia = await this.asistenciaRepository.save(asistencia);

    return (wrapper = {
      message: 'edited successfully',
      responseCode: 200,
      result: newAsistencia,
    });
  }

  async remove(id: number) {
    return await this.asistenciaRepository.delete(id);
  }
}
