import { Module } from '@nestjs/common';
import { FrecuenciapagoService } from './frecuenciapago.service';
import { FrecuenciapagoController } from './frecuenciapago.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FrecuenciaPago } from './entities/FrecuenciaPago.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FrecuenciaPago])],
  controllers: [FrecuenciapagoController],
  providers: [FrecuenciapagoService],
})
export class FrecuenciapagoModule {}
