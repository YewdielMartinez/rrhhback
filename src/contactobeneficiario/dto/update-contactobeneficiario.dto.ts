import { PartialType } from '@nestjs/mapped-types';
import { CreateContactobeneficiarioDto } from './create-contactobeneficiario.dto';

export class UpdateContactobeneficiarioDto extends PartialType(CreateContactobeneficiarioDto) {}
