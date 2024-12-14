import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMunicipioDto } from './dto/create-municipio.dto';
import { UpdateMunicipioDto } from './dto/update-municipio.dto';
import { Municipio } from './entities/Municipio.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MunicipioService {
  constructor(
    @InjectRepository(Municipio)
    private readonly municipioRepository: Repository<Municipio>,
  ) {}

  async create(createMunicipioDto: CreateMunicipioDto): Promise<Municipio> {
    const nuevoMunicipio = this.municipioRepository.create(createMunicipioDto);
    return await this.municipioRepository.save(nuevoMunicipio);
  }

  async findAll(): Promise<Municipio[]> {
    return await this.municipioRepository.find();
  }

  async findOne(id: number): Promise<Municipio> {
    const municipio = await this.municipioRepository.findOne({ where: { idMunicipio: id } });
    if (!municipio) {
      throw new NotFoundException(`Municipio con id ${id} no encontrado`);
    }
    return municipio;
  }

  async update(id: number, updateMunicipioDto: UpdateMunicipioDto): Promise<Municipio> {
    const municipio = await this.findOne(id);
    const municipioActualizado = this.municipioRepository.merge(municipio, updateMunicipioDto);
    return await this.municipioRepository.save(municipioActualizado);
  }

  async remove(id: number): Promise<void> {
    const municipio = await this.findOne(id);
    await this.municipioRepository.remove(municipio);
  }
}
