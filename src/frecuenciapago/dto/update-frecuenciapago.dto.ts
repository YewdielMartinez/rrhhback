import { PartialType } from '@nestjs/mapped-types';
import { CreateFrecuenciapagoDto } from './create-frecuenciapago.dto';

export class UpdateFrecuenciapagoDto extends PartialType(CreateFrecuenciapagoDto) {}
