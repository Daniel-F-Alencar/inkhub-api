import { Scheduling } from 'src/scheduling/entities/scheduling.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 255 })
  email: string;

  @Column()
  googleId: string;

  @Column()
  imageUrl: string;

  @Column()
  portifolioUrl: string;

  @OneToMany(() => Scheduling, (scheduling) => scheduling.studio)
  schedules: Scheduling[];
}
