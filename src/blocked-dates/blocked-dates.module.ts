import { Module } from '@nestjs/common';
import { BlockedDatesService } from './blocked-dates.service';
import { BlockedDatesController } from './blocked-dates.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlockedDate } from 'src/blocked-dates/entities/blocked-date.entity';
import { Studio } from 'src/studios/entities/studio.entity';
import { Scheduling } from 'src/scheduling/entities/scheduling.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BlockedDate, Scheduling, Studio])],
  controllers: [BlockedDatesController],
  providers: [BlockedDatesService],
})
export class BlockedDatesModule {}
