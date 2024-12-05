import { Module } from '@nestjs/common';
import { TipocontratoService } from './tipocontrato.service';
import { TipocontratoController } from './tipocontrato.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoContrato } from './entities/TipoContrato.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TipoContrato])],
  controllers: [TipocontratoController],
  providers: [TipocontratoService],
})
export class TipocontratoModule {}
