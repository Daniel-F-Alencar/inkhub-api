import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { BlockedDatesService } from './blocked-dates.service';
import { CreateBlockedDateDto } from './dto/create-blocked-date.dto';

@Controller('blocked-dates')
export class BlockedDatesController {
  constructor(private readonly blockedDatesService: BlockedDatesService) {}

  @Post()
  create(@Body() createBlockedDateDto: CreateBlockedDateDto) {
    return this.blockedDatesService.create(createBlockedDateDto);
  }

  @Get(':studioId')
  findAll(@Param('studioId') studioId: number) {
    return this.blockedDatesService.findAll(studioId);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blockedDatesService.remove(+id);
  }
}
