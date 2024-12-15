import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSesionTrabajoDto } from './dto/create-sesion-trabajo.dto';
import { UpdateSesionTrabajoDto } from './dto/update-sesion-trabajo.dto';
import { SesionTrabajo } from './entities/sesion-trabajo.entity';

@Injectable()
export class SesionTrabajoService {
  constructor(
    @InjectRepository(SesionTrabajo)
    private readonly sesionTrabajoRepository: Repository<SesionTrabajo>,
  ) {}

  async create(
    createSesionTrabajoDto: CreateSesionTrabajoDto,
  ): Promise<SesionTrabajo> {
    const nuevaSesion = this.sesionTrabajoRepository.create(
      createSesionTrabajoDto,
    );
    return await this.sesionTrabajoRepository.save(nuevaSesion);
  }

  async findAll(): Promise<SesionTrabajo[]> {
    return await this.sesionTrabajoRepository.find({
      order: {
        createDate: 'DESC',
      },
    });
  }

  async findOne(id: number): Promise<SesionTrabajo> {
    return await this.sesionTrabajoRepository.findOne({
      where: { idSesionTrabajo: id },
      order: {
        createDate: 'DESC',
      },
    });
  }

  async update(id: number, updateSesionTrabajoDto: UpdateSesionTrabajoDto) {
    const sesionTrabajoUpdated = await this.sesionTrabajoRepository.update(
      id,
      updateSesionTrabajoDto,
    );

    return sesionTrabajoUpdated;
  }

  async remove(id: number): Promise<void> {
    await this.sesionTrabajoRepository.delete(id);
  }

  // Finalizar sesión de trabajo
  async finalizarSesion(idSesionTrabajo: number): Promise<SesionTrabajo> {
    const sesion = await this.sesionTrabajoRepository.findOne({
      where: { idSesionTrabajo },
    });
    if (!sesion) {
      throw new Error('Sesión de trabajo no encontrada');
    }
    sesion.finalizedDate = new Date();
    return this.sesionTrabajoRepository.save(sesion);
  }

  // Obtener sesión de trabajo por sesionToken
  async getBySesionToken(sesionToken: string): Promise<SesionTrabajo> {
    return this.sesionTrabajoRepository.findOne({ where: { sesionToken } });
  }

  // Obtener todas las sesiones de trabajo por id_usuario
  async getAllByIdUsuario(idUsuario: number): Promise<SesionTrabajo[]> {
    return this.sesionTrabajoRepository.find({
      where: { usuario: { idUsuario } },
      relations: ['usuario'],
      order: {
        createDate: 'DESC',
      },
    });
  }
}
