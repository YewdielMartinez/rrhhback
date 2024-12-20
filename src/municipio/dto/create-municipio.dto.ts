import { ApiProperty } from '@nestjs/swagger';

export class CreateMunicipioDto {
  @ApiProperty()
  idMunicipio: number;

  @ApiProperty()
  nombre: string;

  @ApiProperty()
  idPais: number;

  @ApiProperty()
  idEstado: number;
}
