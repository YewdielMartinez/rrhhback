import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateAsistenciaDto {
  @IsNotEmpty()
  @ApiProperty()
  idEmpleado: number;
  @IsNotEmpty()
  @ApiProperty()
  idTipoAsistencia: number;
  @IsNotEmpty()
  @ApiProperty()
  asistenciaInicio: Date | null;
  @IsNotEmpty()
  @ApiProperty()
  diaAsistencia: Date | null;
}
