import { Module } from '@nestjs/common';
import { TipolicenciamanejoService } from './tipolicenciamanejo.service';
import { TipolicenciamanejoController } from './tipolicenciamanejo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoLicenciaManejo } from './entities/TipoLicenciaManejo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TipoLicenciaManejo])],
  controllers: [TipolicenciamanejoController],
  providers: [TipolicenciamanejoService],
})
export class TipolicenciamanejoModule {}
