import {
  Controller,
  Get,
  Post,
  Body,
  // Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SchedulingService } from './scheduling.service';
import { CreateSchedulingDto } from './dto/create-scheduling.dto';

@Controller('scheduling')
export class SchedulingController {
  constructor(private readonly schedulingService: SchedulingService) {}
  @Post()
  create(@Body() createSchedulingDto: CreateSchedulingDto) {
    return this.schedulingService.create(createSchedulingDto);
  }
  @Get('studio/:studioId')
  findAllByStudio(@Param('studioId') studioId: number) {
    return this.schedulingService.findAllbyStudio(studioId);
  }
  @Get('user/:userId')
  findAllByUser(@Param('userId') userId: number) {
    return this.schedulingService.findAllbyUser(userId);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.schedulingService.remove(+id);
  }
}
