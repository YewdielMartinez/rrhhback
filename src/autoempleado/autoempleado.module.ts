import { Module } from '@nestjs/common';
import { AutoempleadoService } from './autoempleado.service';
import { AutoempleadoController } from './autoempleado.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutoEmpleado } from './entities/AutoEmpleado.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AutoEmpleado])],
  controllers: [AutoempleadoController],
  providers: [AutoempleadoService],
})
export class AutoempleadoModule {}
