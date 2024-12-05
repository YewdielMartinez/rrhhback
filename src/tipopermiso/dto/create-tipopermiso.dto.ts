import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateTipopermisoDto {
  @IsString()
  @ApiProperty()
  nombrePermiso: string;
}
