import { Injectable } from '@nestjs/common';
import { CreateBlockedDateDto } from './dto/create-blocked-date.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { Scheduling } from 'src/scheduling/entities/scheduling.entity';
import { Studio } from 'src/studios/entities/studio.entity';
import { BlockedDate } from './entities/blocked-date.entity';

@Injectable()
export class BlockedDatesService {
  constructor(
    @InjectRepository(Scheduling)
    private readonly schedulingRepository: Repository<Scheduling>,

    @InjectRepository(BlockedDate)
    private readonly blockedDateRepository: Repository<BlockedDate>,
    @InjectRepository(Studio)
    private readonly studiosRepository: Repository<Studio>,
  ) {}
  async create(createBlockedDateDto: CreateBlockedDateDto) {
    const studio = await this.studiosRepository.findOne({
      where: { id: createBlockedDateDto.studio },
    });

    if (!studio) {
      throw new Error('Não foi achado nenhum studio com esse id');
    }

    const blockedDate: DeepPartial<BlockedDate> = {
      dtEndBlock: new Date(createBlockedDateDto.dtEndBlock),
      dtStartBlock: new Date(createBlockedDateDto.dtStartBlock),
      studio: studio,
    };

    return await this.blockedDateRepository.save(blockedDate);
  }

  findAll(studioId: number) {
    return this.schedulingRepository.find({
      where: { studio: { id: studioId } },
      relations: {
        studio: true,
        user: true,
      },
    });
  }

  async remove(id: number) {
    const blockedDate = await this.blockedDateRepository.findOne({
      where: { id },
    });
    return await this.blockedDateRepository.remove(blockedDate);
  }
}
