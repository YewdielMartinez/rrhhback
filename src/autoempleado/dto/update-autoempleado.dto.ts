import { PartialType } from '@nestjs/mapped-types';
import { CreateAutoempleadoDto } from './create-autoempleado.dto';

export class UpdateAutoempleadoDto extends PartialType(CreateAutoempleadoDto) {}
