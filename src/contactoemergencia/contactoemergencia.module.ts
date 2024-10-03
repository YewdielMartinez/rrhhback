import { Module } from '@nestjs/common';
import { ContactoemergenciaService } from './contactoemergencia.service';
import { ContactoemergenciaController } from './contactoemergencia.controller';

@Module({
  controllers: [ContactoemergenciaController],
  providers: [ContactoemergenciaService],
})
export class ContactoemergenciaModule {}
