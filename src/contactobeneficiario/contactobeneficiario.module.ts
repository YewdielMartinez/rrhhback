import { Module } from '@nestjs/common';
import { ContactobeneficiarioService } from './contactobeneficiario.service';
import { ContactobeneficiarioController } from './contactobeneficiario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactoBeneficiario } from './entities/ContactoBeneficiario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ContactoBeneficiario])],
  controllers: [ContactobeneficiarioController],
  providers: [ContactobeneficiarioService],
})
export class ContactobeneficiarioModule {}
