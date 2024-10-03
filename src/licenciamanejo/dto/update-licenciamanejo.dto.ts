import { PartialType } from '@nestjs/mapped-types';
import { CreateLicenciamanejoDto } from './create-licenciamanejo.dto';

export class UpdateLicenciamanejoDto extends PartialType(CreateLicenciamanejoDto) {}
