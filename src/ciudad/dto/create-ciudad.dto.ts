import { ApiProperty } from '@nestjs/swagger';

export class CreateCiudadDto {
  @ApiProperty()
  idCiudad: number;

  @ApiProperty()
  nombre: string;

  @ApiProperty()
  idPais: number;

  @ApiProperty()
  idEstado: number;

  @ApiProperty()
  idMunicipio: number;
}
