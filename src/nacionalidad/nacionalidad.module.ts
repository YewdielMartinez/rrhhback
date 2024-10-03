import { Module } from '@nestjs/common';
import { NacionalidadService } from './nacionalidad.service';
import { NacionalidadController } from './nacionalidad.controller';

@Module({
  controllers: [NacionalidadController],
  providers: [NacionalidadService],
})
export class NacionalidadModule {}
