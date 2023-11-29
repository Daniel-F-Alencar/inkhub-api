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
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  content: string;

  @CreateDateColumn({ type: 'timestamp' })
  commentDate: Date;

  @ManyToOne(() => Studio, (studio) => studio.comments)
  studio: Studio;

  @ManyToOne(() => User)
  user: User;
}
