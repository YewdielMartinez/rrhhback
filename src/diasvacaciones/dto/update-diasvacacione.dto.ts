import { PartialType } from '@nestjs/mapped-types';
import { CreateDiasvacacioneDto } from './create-diasvacacione.dto';

export class UpdateDiasvacacioneDto extends PartialType(CreateDiasvacacioneDto) {}
