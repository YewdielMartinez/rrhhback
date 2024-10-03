import { Module } from '@nestjs/common';
import { EstadocivilService } from './estadocivil.service';
import { EstadocivilController } from './estadocivil.controller';

@Module({
  controllers: [EstadocivilController],
  providers: [EstadocivilService],
})
export class EstadocivilModule {}
