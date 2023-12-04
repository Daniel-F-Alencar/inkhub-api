import { Injectable } from '@nestjs/common';
import { CreateStudioDto } from './dto/create-studio.dto';
import { UpdateStudioDto } from './dto/update-studio.dto';
import { DeepPartial, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Studio } from './entities/studio.entity';

@Injectable()
export class StudiosService {
  constructor(
    @InjectRepository(Studio)
    private readonly studiosRepository: Repository<Studio>,
  ) {}

  async create(createStudioDto: CreateStudioDto) {
    const studio: DeepPartial<Studio> = {
      ...createStudioDto,
      blockedDates: [{ dtStartBlock: new Date(), dtEndBlock: new Date() }],
    };
    return await this.studiosRepository.save(studio);
  }

  findAll() {
    return this.studiosRepository.find({
      relations: {
        blockedDates: true,
        comments: true,
        schedules: true,
      },
    });
  }

  findOne(id: number) {
    return this.studiosRepository.findOne({
      where: { id },
      relations: {
        blockedDates: true,
        comments: true,
        schedules: true,
      },
    });
  }

  async searchIfExists(googleId: string): Promise<Studio | boolean> {
    const studio = await this.studiosRepository.findOne({
      where: { googleId },
    });
    return studio ? studio : false;
  }

  async update(id: number, updateStudioDto: UpdateStudioDto) {
    const studio = await this.studiosRepository.findOne({ where: { id } });
    Object.assign(studio, updateStudioDto);
    return await this.studiosRepository.save(studio);
  }

  async remove(id: number) {
    const user = await this.studiosRepository.findOne({ where: { id } });
    return await this.studiosRepository.remove(user);
  }
}
