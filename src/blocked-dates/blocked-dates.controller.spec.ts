import { Test, TestingModule } from '@nestjs/testing';
import { BlockedDatesController } from './blocked-dates.controller';
import { BlockedDatesService } from './blocked-dates.service';

describe('BlockedDatesController', () => {
  let controller: BlockedDatesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlockedDatesController],
      providers: [BlockedDatesService],
    }).compile();

    controller = module.get<BlockedDatesController>(BlockedDatesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
