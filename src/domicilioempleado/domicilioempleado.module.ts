import { Module } from '@nestjs/common';
import { DomicilioempleadoService } from './domicilioempleado.service';
import { DomicilioempleadoController } from './domicilioempleado.controller';

@Module({
  controllers: [DomicilioempleadoController],
  providers: [DomicilioempleadoService],
})
export class DomicilioempleadoModule {}
