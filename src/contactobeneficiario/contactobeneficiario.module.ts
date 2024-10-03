import { Module } from '@nestjs/common';
import { ContactobeneficiarioService } from './contactobeneficiario.service';
import { ContactobeneficiarioController } from './contactobeneficiario.controller';

@Module({
  controllers: [ContactobeneficiarioController],
  providers: [ContactobeneficiarioService],
})
export class ContactobeneficiarioModule {}
