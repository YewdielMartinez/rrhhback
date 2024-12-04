import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/Usuario.entity';
import { Repository } from 'typeorm';
import { SingleWrapper } from 'src/common/SingleWrapper';

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

  async findById(id: number): Promise<SingleWrapper<Usuario>> {
    const user = await this.usuarioRepository.findOne({
      where: { idUsuario: id },
    });
    const wrapper: SingleWrapper<Usuario> = {
      result: user,
      message: 'Encontrado correctamente',
      responseCode: 200,
    };

    return wrapper;
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<void> {
    await this.usuarioRepository.update(id, updateUsuarioDto);
  }

  async remove(id: number): Promise<void> {
    await this.usuarioRepository.delete(id);
  }
}
