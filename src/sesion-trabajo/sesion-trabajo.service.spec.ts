import { Test, TestingModule } from '@nestjs/testing';
import { SesionTrabajoService } from './sesion-trabajo.service';

describe('SesionTrabajoService', () => {
  let service: SesionTrabajoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SesionTrabajoService],
    }).compile();

    service = module.get<SesionTrabajoService>(SesionTrabajoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
