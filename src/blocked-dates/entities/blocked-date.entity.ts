import { PrimaryGeneratedColumn, Column, ManyToOne, Entity } from 'typeorm';
import { Studio } from 'src/studios/entities/studio.entity';

@Entity()
export class BlockedDate {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Studio, (studio) => studio.blockedDates)
  studio: Studio;

  @Column({ type: 'timestamp' })
  dtStartBlock: Date;

  @Column({ type: 'timestamp' })
  dtEndBlock: Date;
}
