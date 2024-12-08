import { Injectable } from '@nestjs/common';
import { CreateSucursalDto } from './dto/create-sucursal.dto';
import { UpdateSucursalDto } from './dto/update-sucursal.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Sucursal } from './entities/Sucursal.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SucursalService {
  constructor(
    @InjectRepository(Sucursal)
    private readonly sucursalRepository: Repository<Sucursal>,
  ) {}

  // Crear una nueva sucursal
  async create(createSucursalDto: CreateSucursalDto): Promise<Sucursal> {
    const newSucursal = this.sucursalRepository.create(createSucursalDto);
    return await this.sucursalRepository.save(newSucursal);
  }

  // Obtener todas las sucursales
  async findAll(): Promise<Sucursal[]> {
    return await this.sucursalRepository.find();
  }

  // Obtener una sucursal por su ID
  async findOne(id: number): Promise<Sucursal> {
    return await this.sucursalRepository.findOne({ where: { idSucursal: id } });
  }

  // Actualizar una sucursal por su ID
  async update(id: number, updateSucursalDto: UpdateSucursalDto): Promise<void> {
    await this.sucursalRepository.update(id, updateSucursalDto);
  }

  // Eliminar una sucursal por su ID
  async remove(id: number): Promise<void> {
    const result = await this.sucursalRepository.delete(id);
    if (result.affected === 0) {
      throw new Error(`Sucursal with ID ${id} not found`);
    }
  }
}
