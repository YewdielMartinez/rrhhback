import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUsuarioDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  nombreUsuario: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @ApiProperty()
  correo: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  password: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  idEmpleado: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  idUsuarioPadre: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  isAdmin:boolean;
}
