import { Module } from '@nestjs/common';
import { DiasvacacionesService } from './diasvacaciones.service';
import { DiasvacacionesController } from './diasvacaciones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DiasVacaciones } from './entities/DiasVacaciones.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DiasVacaciones])],
  controllers: [DiasvacacionesController],
  providers: [DiasvacacionesService],
})
export class DiasvacacionesModule {}
