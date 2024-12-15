import { Module } from '@nestjs/common';
import { SesionTrabajoService } from './sesion-trabajo.service';
import { SesionTrabajoController } from './sesion-trabajo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SesionTrabajo } from './entities/sesion-trabajo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SesionTrabajo])],
  controllers: [SesionTrabajoController],
  providers: [SesionTrabajoService],
})
export class SesionTrabajoModule {}
