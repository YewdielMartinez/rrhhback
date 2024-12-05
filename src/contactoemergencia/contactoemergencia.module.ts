import { Module } from '@nestjs/common';
import { ContactoemergenciaService } from './contactoemergencia.service';
import { ContactoemergenciaController } from './contactoemergencia.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactoEmergencia } from './entities/ContactoEmergencia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ContactoEmergencia])],
  controllers: [ContactoemergenciaController],
  providers: [ContactoemergenciaService],
})
export class ContactoemergenciaModule {}
