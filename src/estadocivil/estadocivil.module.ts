import { Module } from '@nestjs/common';
import { EstadocivileService } from './estadocivil.service';
import { EstadocivilController } from './estadocivil.controller';

@Module({
  controllers: [EstadocivilController],
  providers: [EstadocivileService],
})
export class EstadocivilModule {}
