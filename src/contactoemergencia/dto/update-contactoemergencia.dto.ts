import { PartialType } from '@nestjs/mapped-types';
import { CreateContactoemergenciaDto } from './create-contactoemergencia.dto';

export class UpdateContactoemergenciaDto extends PartialType(CreateContactoemergenciaDto) {}
