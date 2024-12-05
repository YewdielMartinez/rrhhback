import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateContactoemergenciaDto } from './dto/create-contactoemergencia.dto';
import { UpdateContactoemergenciaDto } from './dto/update-contactoemergencia.dto';
import { ContactoEmergencia } from './entities/ContactoEmergencia.entity';

@Injectable()
export class ContactoemergenciaService {
  constructor(
    @InjectRepository(ContactoEmergencia)
    private readonly contactoEmergenciaRepository: Repository<ContactoEmergencia>,
  ) {}

  async create(
    createContactoemergenciaDto: CreateContactoemergenciaDto,
  ): Promise<ContactoEmergencia> {
    const nuevoContacto = this.contactoEmergenciaRepository.create(
      createContactoemergenciaDto,
    );
    return this.contactoEmergenciaRepository.save(nuevoContacto);
  }

  async findAll(): Promise<ContactoEmergencia[]> {
    return this.contactoEmergenciaRepository.find();
  }

  async findOne(id: number): Promise<ContactoEmergencia> {
    const contacto = await this.contactoEmergenciaRepository.findOne({
      where: { idContactoEmergencia: id },
    });
    if (!contacto) {
      throw new NotFoundException(
        `ContactoEmergencia con ID ${id} no encontrado`,
      );
    }
    return contacto;
  }

  async update(
    id: number,
    updateContactoemergenciaDto: UpdateContactoemergenciaDto,
  ): Promise<ContactoEmergencia> {
    const contacto = await this.findOne(id);
    Object.assign(contacto, updateContactoemergenciaDto);
    return this.contactoEmergenciaRepository.save(contacto);
  }

  async remove(id: number): Promise<void> {
    const contacto = await this.findOne(id);
    await this.contactoEmergenciaRepository.remove(contacto);
  }
}
