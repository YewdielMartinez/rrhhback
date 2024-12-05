import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateTipocontratoDto {
  @IsString()
  @ApiProperty()
  descripcionContrato: string;
}
