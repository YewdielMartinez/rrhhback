import { PartialType } from '@nestjs/mapped-types';
import { CreateDiasvacacionesDto } from './create-diasvacaciones.dto';

export class UpdateDiasvacacionesDto extends PartialType(CreateDiasvacacionesDto) {}
