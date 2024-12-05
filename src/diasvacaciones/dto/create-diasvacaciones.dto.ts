import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class CreateDiasvacacionesDto {
  @IsNumber()
  @ApiProperty()
  diasVacaciones: number;
}
