import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateContactoemergenciaDto {
  @IsString()
  @ApiProperty()
  nombreContactoEmergencia: string;

  @IsString()
  @ApiProperty()
  numCelContactoEmergencia: string;

  @IsNumber()
  @ApiProperty()
  idEmpleado: number;
}
