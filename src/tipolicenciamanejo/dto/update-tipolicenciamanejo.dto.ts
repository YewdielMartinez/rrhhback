import { PartialType } from '@nestjs/mapped-types';
import { CreateTipolicenciamanejoDto } from './create-tipolicenciamanejo.dto';

export class UpdateTipolicenciamanejoDto extends PartialType(CreateTipolicenciamanejoDto) {}
