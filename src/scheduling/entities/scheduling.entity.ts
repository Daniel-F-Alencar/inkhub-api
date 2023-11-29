import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { Studio } from 'src/studios/entities/studio.entity';

@Entity()
export class Scheduling {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp' })
  dtStartSchedule: Date;

  @Column({ type: 'timestamp' })
  dtEndSchedule: Date;

  @CreateDateColumn({ type: 'timestamp' })
  date: Date;

  @ManyToOne(() => Studio, (studio) => studio.schedules)
  studio: Studio;

  @ManyToOne(() => User, (user) => user.schedules)
  user: User;
}
