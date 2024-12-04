import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Empleado } from './entities/Empleado.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EmpleadoService {
  constructor(
    @InjectRepository(Empleado)
    private readonly empleadoRepository: Repository<Empleado>,
  ) {}

  // Crear un empleado
  async create(createEmpleadoDto: CreateEmpleadoDto): Promise<Empleado> {
    const nuevoEmpleado = this.empleadoRepository.create(createEmpleadoDto);
    return this.empleadoRepository.save(nuevoEmpleado);
  }

  // Obtener todos los empleados
  async findAll(): Promise<Empleado[]> {
    return this.empleadoRepository.find();
  }

  // Obtener un empleado por ID
  async findOne(id: number): Promise<Empleado> {
    const empleado = await this.empleadoRepository.findOne({ where: { idEmpleado: id } });
    if (!empleado) {
      throw new NotFoundException(`Empleado con ID ${id} no encontrado`);
    }
    return empleado;
  }

  // Actualizar un empleado
  async update(id: number, updateEmpleadoDto: UpdateEmpleadoDto): Promise<Empleado> {
    const empleado = await this.findOne(id); // Verifica si el empleado existe
    const empleadoActualizado = Object.assign(empleado, updateEmpleadoDto);
    return this.empleadoRepository.save(empleadoActualizado);
  }

  // Eliminar un empleado
  async remove(id: number): Promise<void> {
    const empleado = await this.findOne(id); // Verifica si el empleado existe
    await this.empleadoRepository.remove(empleado);
  }
}
