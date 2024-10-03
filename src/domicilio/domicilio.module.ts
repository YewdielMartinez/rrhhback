import { Module } from '@nestjs/common';
import { DomicilioService } from './domicilio.service';
import { DomicilioController } from './domicilio.controller';

@Module({
  controllers: [DomicilioController],
  providers: [DomicilioService],
})
export class DomicilioModule {}
