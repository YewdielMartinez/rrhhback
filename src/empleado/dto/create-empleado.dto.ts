import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateEmpleadoDto {
  @ApiProperty()
  @IsString()
  nombreEmpleado: string;

  @ApiProperty()
  @IsString()
  curp: string;

  @ApiProperty()
  @IsString()
  rfc: string;

  @ApiProperty()
  @IsString()
  nss: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  emailLaboral: string | null;

  @ApiProperty()
  @IsOptional()
  @IsString()
  emailPersonal: string | null;

  @ApiProperty()
  @IsOptional()
  @IsString()
  numCelLaboral: string | null;

  @ApiProperty()
  @IsString()
  numCelPersonal: string;

  @ApiProperty()
  @IsString()
  registroPatronal: string;

  @ApiProperty()
  @IsString()
  fechaNacimiento: string;

  @ApiProperty()
  @IsString()
  lugarNacimiento: string;

  @ApiProperty()
  @IsNumber()
  idNacionalidad: number;

  @ApiProperty()
  @IsNumber()
  idEstadoCivil: number;

  @ApiProperty()
  @IsNumber()
  idSucursal: number;

  @ApiProperty()
  @IsNumber()
  idDepartamento: number;

  @ApiProperty()
  @IsNumber()
  idPuesto: number;

  @ApiProperty()
  @IsNumber()
  idTipoEmpleado: number;

  @ApiProperty()
  @IsNumber()
  idDiasVacaciones: number;

  @ApiProperty()
  @IsString()
  estatus: string;
}
