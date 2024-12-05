import { Module } from '@nestjs/common';
import { TipoempleadoService } from './tipoempleado.service';
import { TipoempleadoController } from './tipoempleado.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoEmpleado } from './entities/TipoEmpleado.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TipoEmpleado])],
  controllers: [TipoempleadoController],
  providers: [TipoempleadoService],
})
export class TipoempleadoModule {}
