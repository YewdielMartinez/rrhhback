import { Controller, Get } from '@nestjs/common';
import { SeederService } from './seeder.service';

@Controller('seed')
export class SeederController {
  constructor(private readonly seederService: SeederService) {}

  @Get()
  async runSeed() {
    await this.seederService.runSeed();
    return { message: 'Seeder ejecutado correctamente' };
  }
}
