import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateFrecuenciapagoDto {
  @IsString()
  @ApiProperty()
  periodicidad: string;

  @IsNumber()
  @ApiProperty()
  periodicidadDias: number;
}
