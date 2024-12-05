import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDepartamentoDto } from './dto/create-departamento.dto';
import { UpdateDepartamentoDto } from './dto/update-departamento.dto';
import { Departamento } from './entities/Departamento.entity';

@Injectable()
export class DepartamentoService {
  constructor(
    @InjectRepository(Departamento)
    private readonly departamentoRepository: Repository<Departamento>,
  ) {}

  async create(createDepartamentoDto: CreateDepartamentoDto): Promise<Departamento> {
    const nuevoDepartamento = this.departamentoRepository.create(createDepartamentoDto);
    return this.departamentoRepository.save(nuevoDepartamento);
  }

  async findAll(): Promise<Departamento[]> {
    return this.departamentoRepository.find();
  }

  async findOne(id: number): Promise<Departamento> {
    const departamento = await this.departamentoRepository.findOne({ where: { idDepartamento: id } });
    if (!departamento) {
      throw new NotFoundException(`Departamento con ID ${id} no encontrado`);
    }
    return departamento;
  }

  async update(id: number, updateDepartamentoDto: UpdateDepartamentoDto): Promise<Departamento> {
    const departamento = await this.findOne(id);
    Object.assign(departamento, updateDepartamentoDto);
    return this.departamentoRepository.save(departamento);
  }

  async remove(id: number): Promise<void> {
    const departamento = await this.findOne(id);
    await this.departamentoRepository.remove(departamento);
  }
}