import { Module } from '@nestjs/common';
import { LicenciamanejoService } from './licenciamanejo.service';
import { LicenciamanejoController } from './licenciamanejo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LicenciaManejo } from './entities/LicenciaManejo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LicenciaManejo])],
  controllers: [LicenciamanejoController],
  providers: [LicenciamanejoService],
})
export class LicenciamanejoModule {}
