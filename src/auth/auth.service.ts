import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuarioService } from 'src/usuario/usuario.service';
import { LogInDto } from './dto/LogInDto';
import { UsuarioLogIn } from './dto/usuario-log-in.dto';
import { SignUpUserDto } from './dto/sign-up-user.dto';
import { SingleWrapper } from 'src/common/SingleWrapper';

@Injectable()
export class AuthService {
  constructor(private usersService: UsuarioService) {}

  async logIn(logInDto: LogInDto): Promise<SingleWrapper<UsuarioLogIn>> {
    try {
      const user = await this.usersService.findByEmail(logInDto.correo);

      if (user.password !== logInDto.password) {
        throw new UnauthorizedException();
      }

      const { password, ...usuarioSinPassword } = user;
      const usuarioLogIn: UsuarioLogIn = usuarioSinPassword as UsuarioLogIn;

      const wrapper: SingleWrapper<UsuarioLogIn> = {
        result: usuarioLogIn,
        message: 'login succesful',
        responseCode: 200,
      };

      return wrapper;
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
