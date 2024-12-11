import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { EmpleadoModule } from 'src/empleado/empleado.module';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt-strategy/jwt-strategy';

@Module({
  imports: [
    UsuarioModule,
    EmpleadoModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule], // Importa ConfigModule para usar ConfigService
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'), // Carga desde .env
        signOptions: {
          expiresIn: configService.get<string>('JWT_EXPIRES_IN') || '1h', // Tiempo de expiración
        },
      }),
      inject: [ConfigService], // Inyecta ConfigService
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
