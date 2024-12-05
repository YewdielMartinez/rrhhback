import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateAutoempleadoDto {
  @IsNumber()
  @ApiProperty()
  idAuto: number;

  @IsNumber()
  @ApiProperty()
  idEmpleadoResponsable: number;

  @IsString()
  @ApiProperty()
  fechaAsignacion: string;

  @IsString()
  @ApiProperty()
  fechaRemocion: string;
}
