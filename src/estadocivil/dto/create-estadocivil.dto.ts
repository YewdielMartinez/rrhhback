import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateEstadocivilDto {
  @IsString()
  @ApiProperty()
  estadoCivil: string;
}
