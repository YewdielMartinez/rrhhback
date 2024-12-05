import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateDomicilioDto {
  @IsNumber()
  @ApiProperty()
  idPais: number;

  @IsNumber()
  @ApiProperty()
  idEstado: number;

  @IsNumber()
  @ApiProperty()
  idMunicipio: number;

  @IsNumber()
  @ApiProperty()
  idCiudad: number;

  @IsString()
  @ApiProperty()
  colonia: string;

  @IsString()
  @ApiProperty()
  cp: string;

  @IsString()
  @ApiProperty()
  numero: string;
}
