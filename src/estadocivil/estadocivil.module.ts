import { Module } from '@nestjs/common';
import { EstadocivileService } from './estadocivil.service';
import { EstadocivilController } from './estadocivil.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstadoCivil } from './entities/EstadoCivil.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EstadoCivil])],
  controllers: [EstadocivilController],
  providers: [EstadocivileService],
})
export class EstadocivilModule {}
