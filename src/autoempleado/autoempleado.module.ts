import { Module } from '@nestjs/common';
import { AutoempleadoService } from './autoempleado.service';
import { AutoempleadoController } from './autoempleado.controller';

@Module({
  controllers: [AutoempleadoController],
  providers: [AutoempleadoService],
})
export class AutoempleadoModule {}
