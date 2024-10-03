import { PartialType } from '@nestjs/mapped-types';
import { CreateDomicilioempleadoDto } from './create-domicilioempleado.dto';

export class UpdateDomicilioempleadoDto extends PartialType(CreateDomicilioempleadoDto) {}
