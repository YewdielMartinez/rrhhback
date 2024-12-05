import { Module } from '@nestjs/common';
import { TipopermisoService } from './tipopermiso.service';
import { TipopermisoController } from './tipopermiso.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoPermiso } from './entities/TipoPermiso.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TipoPermiso])],
  controllers: [TipopermisoController],
  providers: [TipopermisoService],
})
export class TipopermisoModule {}
