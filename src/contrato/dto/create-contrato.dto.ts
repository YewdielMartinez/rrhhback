import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateContratoDto {
  
  @IsNumber()
  @ApiProperty()
  idEmpleado: number;
  
  @IsString()
  @ApiProperty()
  fechaInicio: string;
  
  @IsString()
  @ApiProperty()
  fechaFin: string | null;
  
  @IsString()
  @ApiProperty()
  sueldoBase: string;
  
  @IsNumber()
  @ApiProperty()
  idTipoContrato: number;
  
  @IsString()
  @ApiProperty()
  horasSemanales: string;
  
  @IsNumber()
  @ApiProperty()
  idFrecuenciaPago: number;
  
  @IsString()
  @ApiProperty()
  horaEntrada: string;
  
  @IsString()
  @ApiProperty()
  horaSalida: string;
  
  @IsString()
  @ApiProperty()
  asistenciaNecesaria: string;
  
  @IsString()
  @ApiProperty()
  manejaAutomovilEmpresarial: string;
  
  @IsString()
  @ApiProperty()
  motivoTerminacion: string | null;
  
  @IsString()
  @ApiProperty()
  estatus: string;
}
