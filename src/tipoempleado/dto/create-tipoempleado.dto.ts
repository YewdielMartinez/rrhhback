import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateTipoempleadoDto {
  @IsString()
  @ApiProperty()
  nombreTipoEmpleado: string;
}
