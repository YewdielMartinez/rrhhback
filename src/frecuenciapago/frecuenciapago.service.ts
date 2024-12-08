import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFrecuenciapagoDto } from './dto/create-frecuenciapago.dto';
import { UpdateFrecuenciapagoDto } from './dto/update-frecuenciapago.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FrecuenciaPago } from './entities/FrecuenciaPago.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FrecuenciapagoService {
  constructor(
    @InjectRepository(FrecuenciaPago)
    private readonly frecuenciaPagoRepository: Repository<FrecuenciaPago>,
  ) {}

  // Crear una nueva frecuencia de pago
  async create(createFrecuenciapagoDto: CreateFrecuenciapagoDto): Promise<FrecuenciaPago> {
    const newFrecuenciaPago = this.frecuenciaPagoRepository.create(createFrecuenciapagoDto);
    return await this.frecuenciaPagoRepository.save(newFrecuenciaPago);
  }

  // Obtener todas las frecuencias de pago
  async findAll(): Promise<FrecuenciaPago[]> {
    return await this.frecuenciaPagoRepository.find();
  }

  // Obtener una frecuencia de pago por su ID
  async findOne(id: number): Promise<FrecuenciaPago> {
    const frecuenciaPago = await this.frecuenciaPagoRepository.findOne({ where: { idFrecuenciaPago: id } });
    if (!frecuenciaPago) {
      throw new NotFoundException(`FrecuenciaPago with ID ${id} not found`);
    }
    return frecuenciaPago;
  }

  // Actualizar una frecuencia de pago por su ID
  async update(id: number, updateFrecuenciapagoDto: UpdateFrecuenciapagoDto): Promise<void> {
    await this.frecuenciaPagoRepository.update(id, updateFrecuenciapagoDto);
  }

  // Eliminar una frecuencia de pago por su ID
  async remove(id: number): Promise<void> {
    const result = await this.frecuenciaPagoRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`FrecuenciaPago with ID ${id} not found`);
    }
  }
}
