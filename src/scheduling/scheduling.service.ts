import { Injectable } from '@nestjs/common';
import { CreateSchedulingDto } from './dto/create-scheduling.dto';
// import { UpdateSchedulingDto } from './dto/update-scheduling.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Scheduling } from 'src/scheduling/entities/scheduling.entity';
import { Repository, DeepPartial } from 'typeorm';
import { Studio } from 'src/studios/entities/studio.entity';
import { User } from 'src/users/entities/user.entity';
import { BlockedDate } from 'src/blocked-dates/entities/blocked-date.entity';

@Injectable()
export class SchedulingService {
  constructor(
    @InjectRepository(Scheduling)
    private readonly schedulingRepository: Repository<Scheduling>,
    @InjectRepository(Studio)
    private readonly studiosRepository: Repository<Studio>,

    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,

    @InjectRepository(BlockedDate)
    private readonly blockedDateRepository: Repository<BlockedDate>,
  ) {}
  async create(createSchedulingDto: CreateSchedulingDto) {
    const studio = await this.studiosRepository.findOne({
      where: { id: createSchedulingDto.studioId },
    });

    const user = await this.usersRepository.findOne({
      where: { id: createSchedulingDto.userId },
    });

    if (!user || !studio) {
      throw new Error('');
    }

    const blockedDate: DeepPartial<BlockedDate> = {
      dtStartBlock: new Date(createSchedulingDto.dtStartSchedule),
      dtEndBlock: new Date(createSchedulingDto.dtEndSchedule),
      studio: studio,
    };

    const scheduling: DeepPartial<Scheduling> = {
      dtStartSchedule: new Date(createSchedulingDto.dtStartSchedule),
      dtEndSchedule: new Date(createSchedulingDto.dtEndSchedule),
      studio: studio,
      user: user,
    };

    await this.blockedDateRepository.save(blockedDate);
    return await this.schedulingRepository.save(scheduling);
  }
  findAllbyStudio(studioId: number) {
    return this.schedulingRepository.find({
      where: { studio: { id: studioId } },
      relations: {
        studio: true,
        user: true,
      },
    });
  }
  findAllbyUser(userId: number) {
    return this.schedulingRepository.find({
      where: { user: { id: userId } },
      relations: ['studio', 'user'],
    });
  }
  async remove(id: number) {
    const comment = await this.schedulingRepository.findOne({ where: { id } });
    return await this.schedulingRepository.remove(comment);
  }
}
