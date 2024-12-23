import { ApiProperty } from "@nestjs/swagger";

export class CreateEstadoDto {
  @ApiProperty()
  idEstado: number;

  @ApiProperty()
  nombre: string;

  @ApiProperty()
  idPais: number;
}
