import { IsString, IsNumber } from 'class-validator';

export class CreateBlockedDateDto {
  @IsNumber()
  studio: number;

  @IsString()
  dtStartBlock: string;

  @IsString()
  dtEndBlock: string;
}
