import { PartialType } from '@nestjs/mapped-types';
import { CreateTipocontratoDto } from './create-tipocontrato.dto';

export class UpdateTipocontratoDto extends PartialType(CreateTipocontratoDto) {}
