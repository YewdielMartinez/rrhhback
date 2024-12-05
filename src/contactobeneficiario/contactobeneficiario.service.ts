import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateContactobeneficiarioDto } from './dto/create-contactobeneficiario.dto';
import { UpdateContactobeneficiarioDto } from './dto/update-contactobeneficiario.dto';
import { ContactoBeneficiario } from './entities/ContactoBeneficiario.entity';

@Injectable()
export class ContactobeneficiarioService {
  constructor(
    @InjectRepository(ContactoBeneficiario)
    private readonly contactoBeneficiarioRepository: Repository<ContactoBeneficiario>,
  ) {}

  async create(
    createContactobeneficiarioDto: CreateContactobeneficiarioDto,
  ): Promise<ContactoBeneficiario> {
    const nuevoContacto = this.contactoBeneficiarioRepository.create(
      createContactobeneficiarioDto,
    );
    return this.contactoBeneficiarioRepository.save(nuevoContacto);
  }

  async findAll(): Promise<ContactoBeneficiario[]> {
    return this.contactoBeneficiarioRepository.find();
  }

  async findOne(id: number): Promise<ContactoBeneficiario> {
    const contacto = await this.contactoBeneficiarioRepository.findOne({
      where: { idContactoBeneficiario: id },
    });
    if (!contacto) {
      throw new NotFoundException(
        `ContactoBeneficiario con ID ${id} no encontrado`,
      );
    }
    return contacto;
  }

  async update(
    id: number,
    updateContactobeneficiarioDto: UpdateContactobeneficiarioDto,
  ): Promise<ContactoBeneficiario> {
    const contacto = await this.findOne(id);
    Object.assign(contacto, updateContactobeneficiarioDto);
    return this.contactoBeneficiarioRepository.save(contacto);
  }

  async remove(id: number): Promise<void> {
    const contacto = await this.findOne(id);
    await this.contactoBeneficiarioRepository.remove(contacto);
  }
}
