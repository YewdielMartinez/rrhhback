import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString, MaxLength } from "class-validator";

export class CreateSesionTrabajoDto {
  @ApiProperty()
  @IsNumber()
  idUsuario: number;

  @ApiProperty()
  @IsString()
  @MaxLength(12)
  sesionToken: string;

  @ApiProperty({ required: false })
  @IsOptional()
  finalizedDate?: Date;
}
