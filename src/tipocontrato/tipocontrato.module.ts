import { Module } from '@nestjs/common';
import { TipocontratoService } from './tipocontrato.service';
import { TipocontratoController } from './tipocontrato.controller';

@Module({
  controllers: [TipocontratoController],
  providers: [TipocontratoService],
})
export class TipocontratoModule {}
