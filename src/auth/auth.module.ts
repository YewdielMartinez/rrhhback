import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { EmpleadoModule } from 'src/empleado/empleado.module';

@Module({
  imports: [UsuarioModule, EmpleadoModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
