import { Module } from '@nestjs/common';
import { FrecuenciapagoService } from './frecuenciapago.service';
import { FrecuenciapagoController } from './frecuenciapago.controller';

@Module({
  controllers: [FrecuenciapagoController],
  providers: [FrecuenciapagoService],
})
export class FrecuenciapagoModule {}
