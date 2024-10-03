import { Module } from '@nestjs/common';
import { TipoempleadoService } from './tipoempleado.service';
import { TipoempleadoController } from './tipoempleado.controller';

@Module({
  controllers: [TipoempleadoController],
  providers: [TipoempleadoService],
})
export class TipoempleadoModule {}
