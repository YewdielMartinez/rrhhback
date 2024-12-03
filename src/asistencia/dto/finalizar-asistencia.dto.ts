import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class FinalizarAsistenciaDto {
  @IsNotEmpty()
  @ApiProperty()
  asistenciaFin: Date | null;
}