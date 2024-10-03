import { Module } from '@nestjs/common';
import { DiasvacacionesService } from './diasvacaciones.service';
import { DiasvacacionesController } from './diasvacaciones.controller';

@Module({
  controllers: [DiasvacacionesController],
  providers: [DiasvacacionesService],
})
export class DiasvacacionesModule {}
