import { Module } from '@nestjs/common';
import { SchedulingService } from './scheduling.service';
import { SchedulingController } from './scheduling.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Scheduling } from 'src/scheduling/entities/scheduling.entity';
import { Studio } from 'src/studios/entities/studio.entity';
import { User } from 'src/users/entities/user.entity';
import { BlockedDate } from 'src/blocked-dates/entities/blocked-date.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Scheduling, Studio, User, BlockedDate])],
  controllers: [SchedulingController],
  providers: [SchedulingService],
})
export class SchedulingModule {}
