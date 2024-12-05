import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateContactobeneficiarioDto {
  @IsString()
  @ApiProperty()
  nombreContactoBeneficiario: string;

  @IsString()
  @ApiProperty()
  numCelContactoBeneficiario: string;

  @IsNumber()
  @ApiProperty()
  idEmpleado: number;
}
