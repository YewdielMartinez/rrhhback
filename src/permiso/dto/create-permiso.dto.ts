import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreatePermisoDto {
  @IsNumber()
  @ApiProperty()
  idTipoPermiso: number;

  @IsNumber()
  @ApiProperty()
  idEmpleado: number;

  @IsString()
  @ApiProperty()
  fechaHoraInicio: Date;

  @ApiProperty()
  fechaHoraFin: Date;

  @IsString()
  @ApiProperty()
  descripcion: string | null;

  @IsString()
  @ApiProperty()
  aCuentaDeVacaciones: string;

  @IsString()
  @ApiProperty()
  goceDeSueldo: string;

  @IsString()
  @ApiProperty()
  aprobacion: string;

  @IsNumber()
  @ApiProperty()
  idEmpleadoAprobacion: number;

  @IsString()
  @ApiProperty()
  estatus: string;

}
