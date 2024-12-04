import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuarioService } from 'src/usuario/usuario.service';
import { LogInDto } from './dto/LogInDto';
import { SignUpUserDto } from './dto/sign-up-user.dto';
import { UsuarioLogIn } from './dto/usuario-log-in.dto';

@Injectable()
export class AuthService {
  constructor(private usersService: UsuarioService) {}

  async logIn(logInDto: LogInDto) {
    try {
      const user = await this.usersService.findByEmail(logInDto.correo);

      if (user.password !== logInDto.password) {
        throw new UnauthorizedException();
      }

      const { password, ...usuarioSinPassword } = user;
      const usuarioLogIn: UsuarioLogIn = usuarioSinPassword as UsuarioLogIn;

      return usuarioLogIn
    } catch (error) {
      return {
        message: 'error ocurred',
        responseCode: 500,
        result: null,
      };
    }
  }

  async signUp(signUpUserDto: SignUpUserDto) {
    return this.usersService.create(signUpUserDto);
  }
}
