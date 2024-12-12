import { PartialType } from '@nestjs/swagger';
import { CreateSesionTrabajoDto } from './create-sesion-trabajo.dto';

export class UpdateSesionTrabajoDto extends PartialType(CreateSesionTrabajoDto) {}
