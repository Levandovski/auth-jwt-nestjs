import { Test, TestingModule } from '@nestjs/testing';
import { RefreshTokenGenerateService } from './refresh-token-generate.service';

describe('RefreshTokenGenerateService', () => {
  let service: RefreshTokenGenerateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RefreshTokenGenerateService],
    }).compile();

    service = module.get<RefreshTokenGenerateService>(
      RefreshTokenGenerateService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
