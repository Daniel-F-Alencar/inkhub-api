import { IsNumber, IsString } from 'class-validator';

export class CreateSchedulingDto {
  @IsString()
  dtStartSchedule: string;

  @IsString()
  dtEndSchedule: string;

  @IsNumber()
  studioId: number;

  @IsNumber()
  userId: number;
}
