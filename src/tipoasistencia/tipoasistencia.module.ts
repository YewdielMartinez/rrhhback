import { Module } from '@nestjs/common';
import { TipoasistenciaService } from './tipoasistencia.service';
import { TipoasistenciaController } from './tipoasistencia.controller';

@Module({
  controllers: [TipoasistenciaController],
  providers: [TipoasistenciaService],
})
export class TipoasistenciaModule {}
