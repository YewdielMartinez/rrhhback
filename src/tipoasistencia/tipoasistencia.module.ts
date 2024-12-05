import { Module } from '@nestjs/common';
import { TipoasistenciaService } from './tipoasistencia.service';
import { TipoasistenciaController } from './tipoasistencia.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoAsistencia } from './entities/TipoAsistencia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TipoAsistencia])],
  controllers: [TipoasistenciaController],
  providers: [TipoasistenciaService],
})
export class TipoasistenciaModule {}
