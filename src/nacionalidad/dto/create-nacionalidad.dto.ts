import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateNacionalidadDto {
  @ApiProperty()
  @IsNotEmpty()
  nacionalidad: string;
}
