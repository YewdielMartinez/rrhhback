import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateTipoasistenciaDto {
  @IsString()
  @ApiProperty()
  nombreAsistencia: string;
}
