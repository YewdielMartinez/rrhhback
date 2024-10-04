import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuarioService } from 'src/usuario/usuario.service';
import { LogInDto } from './dto/LogInDto';
import { UsuarioLogIn } from './dto/usuario-log-in.dto';
import { SignUpUserDto } from './dto/sign-up-user.dto';

@Injectable()
export class AuthService {

  constructor(
    private usersService: UsuarioService
  ) {}

  async logIn(logInDto: LogInDto){
    const user = await this.usersService.findByEmail(logInDto.correo);

    console.log(JSON.stringify(user, null, 2)); // !

    if (user.password !== logInDto.password) {
      throw new UnauthorizedException();
    }

    const { password, ...usuarioSinPassword } = user;
    const usuarioLogIn: UsuarioLogIn = usuarioSinPassword as UsuarioLogIn;

    return usuarioLogIn;
  }
  
  async signUp(signUpUserDto :SignUpUserDto){
    return this.usersService.create(signUpUserDto);
  }

}
