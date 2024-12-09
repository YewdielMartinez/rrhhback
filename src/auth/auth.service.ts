import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from 'src/usuario/usuario.service';
import { LogInDto } from './dto/LogInDto';
import { SignUpUserDto } from './dto/sign-up-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usuarioService: UsuarioService,
    private readonly jwtService: JwtService,
  ) {}

  async logIn(logInDto: LogInDto) {
    const user = await this.usuarioService.findByEmail(logInDto.correo);

    if (!user || user.password !== logInDto.password) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { email: user.correo, sub: user.idUsuario }; // Datos a incluir en el token
    const token = this.jwtService.sign(payload);

    return {
      accessToken: token,
      user: { ...user, password: undefined }, // Excluir el password del objeto retornado
    };
  }

  async signUp(signUpUserDto: SignUpUserDto) {
    return this.usuarioService.create(signUpUserDto);
  }
}
