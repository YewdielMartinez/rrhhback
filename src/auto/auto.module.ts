import { Module } from '@nestjs/common';
import { AutoService } from './auto.service';
import { AutoController } from './auto.controller';
import { Auto } from './entities/Auto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Auto])],
  controllers: [AutoController],
  providers: [AutoService],
})
export class AutoModule {}
