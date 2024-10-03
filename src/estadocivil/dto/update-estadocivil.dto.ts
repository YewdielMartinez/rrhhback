import { PartialType } from '@nestjs/mapped-types';
import { CreateEstadocivilDto } from './create-estadocivil.dto';

export class UpdateEstadocivilDto extends PartialType(CreateEstadocivilDto) {}
