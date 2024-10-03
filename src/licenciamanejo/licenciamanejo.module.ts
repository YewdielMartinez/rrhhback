import { Module } from '@nestjs/common';
import { LicenciamanejoService } from './licenciamanejo.service';
import { LicenciamanejoController } from './licenciamanejo.controller';

@Module({
  controllers: [LicenciamanejoController],
  providers: [LicenciamanejoService],
})
export class LicenciamanejoModule {}
