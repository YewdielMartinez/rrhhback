import { PartialType } from '@nestjs/mapped-types';
import { CreateTipopermisoDto } from './create-tipopermiso.dto';

export class UpdateTipopermisoDto extends PartialType(CreateTipopermisoDto) {}
