import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class SignUpUserDto {
  
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
}