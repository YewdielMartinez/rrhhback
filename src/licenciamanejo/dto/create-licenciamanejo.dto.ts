import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateLicenciamanejoDto {
  @IsString()
  @ApiProperty()
  licencia: string;
  @IsNumber()
  @ApiProperty()
  idEmpleado: number;
  @IsNumber()
  @ApiProperty()
  idTipoLicenciaManejo: number;
}
