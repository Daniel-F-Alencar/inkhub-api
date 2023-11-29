import { Test, TestingModule } from '@nestjs/testing';
import { BlockedDatesService } from './blocked-dates.service';

describe('BlockedDatesService', () => {
  let service: BlockedDatesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlockedDatesService],
    }).compile();

    service = module.get<BlockedDatesService>(BlockedDatesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
