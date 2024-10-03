import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoasistenciaDto } from './create-tipoasistencia.dto';

export class UpdateTipoasistenciaDto extends PartialType(CreateTipoasistenciaDto) {}
