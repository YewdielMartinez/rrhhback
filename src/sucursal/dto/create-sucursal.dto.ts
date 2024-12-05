import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateSucursalDto {
  @IsString()  
  @ApiProperty()
  nombreSucursal: string;

  @IsNumber()  
  @ApiProperty()
  idDomicilio: number;

  @IsString()  
  @ApiProperty()
  numTelefono: string;
}
