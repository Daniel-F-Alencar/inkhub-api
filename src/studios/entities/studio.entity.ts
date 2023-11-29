import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Comment } from 'src/comments/entities/comment.entity';
import { BlockedDate } from 'src/blocked-dates/entities/blocked-date.entity';
import { Scheduling } from 'src/scheduling/entities/scheduling.entity';

@Entity()
export class Studio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 255 })
  email: string;

  @Column()
  googleId: string;

  @Column({ length: 255 })
  description: string;

  @Column()
  imageUrl: string;

  @Column()
  status: string;

  @OneToMany(() => BlockedDate, (blockedDates) => blockedDates.studio)
  blockedDates: BlockedDate[];

  @Column()
  location: string;

  @Column()
  cep: string;

  @OneToMany(() => Comment, (comment) => comment.studio)
  comments: Comment[];

  @OneToMany(() => Scheduling, (scheduling) => scheduling.studio)
  schedules: Scheduling[];
}
