import { ApiProperty } from '@nestjs/swagger';

export class CreatePaisDto {
  @ApiProperty()
  idPais: number;

  @ApiProperty()
  nombre: string;
}
