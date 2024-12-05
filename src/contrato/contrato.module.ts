import { Module } from '@nestjs/common';
import { ContratoService } from './contrato.service';
import { ContratoController } from './contrato.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contrato } from './entities/Contrato.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Contrato])],
  controllers: [ContratoController],
  providers: [ContratoService],
})
export class ContratoModule {}
