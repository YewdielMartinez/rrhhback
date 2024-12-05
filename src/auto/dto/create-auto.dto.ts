import { ApiProperty } from "@nestjs/swagger";
import { IsString, MaxLength } from "class-validator";

export class CreateAutoDto {
  
  @IsString()
  @MaxLength(30)
  @ApiProperty()
  nombreModelo: string;

  @IsString()
  @MaxLength(30)
  @ApiProperty()
  yearModelo: string;

  @IsString()
  @MaxLength(30)
  @ApiProperty()
  ordenRegistro: string;

  @IsString()
  @ApiProperty()
  fechaCompra: string;

  @IsString()
  @MaxLength(10)
  @ApiProperty()
  numeroPlacas: string;

  @IsString()
  @MaxLength(17)
  @ApiProperty()
  numeroSerie: string;

  @IsString()
  @MaxLength(20)
  @ApiProperty()
  numeroPoliza: string;

  @IsString()
  @ApiProperty()
  vencimientoPoliza: string;

}
