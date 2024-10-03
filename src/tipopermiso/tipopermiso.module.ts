import { Module } from '@nestjs/common';
import { TipopermisoService } from './tipopermiso.service';
import { TipopermisoController } from './tipopermiso.controller';

@Module({
  controllers: [TipopermisoController],
  providers: [TipopermisoService],
})
export class TipopermisoModule {}
