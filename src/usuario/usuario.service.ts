import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/Usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioService {

  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  create(createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioRepository.save(createUsuarioDto);
  }

  findAll(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }

  findByEmail(correo: string): Promise<Usuario> {
    return this.usuarioRepository.findOne({ where: { correo } });
  }

  findById(id: number): Promise<Usuario> {
    return this.usuarioRepository.findOne({ where: { idUsuario: id } });
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<void> {
    await this.usuarioRepository.update(id, updateUsuarioDto);
  }

  async remove(id: number): Promise<void> {
    await this.usuarioRepository.delete(id);
  }
}
