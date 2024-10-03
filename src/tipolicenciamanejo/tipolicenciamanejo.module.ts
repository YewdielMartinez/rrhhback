import { Module } from '@nestjs/common';
import { TipolicenciamanejoService } from './tipolicenciamanejo.service';
import { TipolicenciamanejoController } from './tipolicenciamanejo.controller';

@Module({
  controllers: [TipolicenciamanejoController],
  providers: [TipolicenciamanejoService],
})
export class TipolicenciamanejoModule {}
