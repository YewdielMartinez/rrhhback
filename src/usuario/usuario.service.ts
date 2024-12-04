import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/Usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    await this.usuarioRepository.save(createUsuarioDto);
  }

  findAll(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }

  findByEmail(correo: string): Promise<Usuario> {
    return this.usuarioRepository.findOne({ where: { correo } });
  }

  async findById(id: number) {
    return await this.usuarioRepository.findOne({
      where: { idUsuario: id },
    });
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<void> {
    await this.usuarioRepository.update(id, updateUsuarioDto);
  }

  async remove(id: number): Promise<void> {
    await this.usuarioRepository.delete(id);
  }
}
