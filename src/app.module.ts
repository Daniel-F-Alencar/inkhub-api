import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { StudiosModule } from './studios/studios.module';
import { Studio } from './studios/entities/studio.entity';
import { Comment } from 'src/comments/entities/comment.entity';
import { CommentsModule } from './comments/comments.module';
import { BlockedDatesModule } from './blocked-dates/blocked-dates.module';
import { BlockedDate } from 'src/blocked-dates/entities/blocked-date.entity';
import { SchedulingModule } from './scheduling/scheduling.module';
import { Scheduling } from 'src/scheduling/entities/scheduling.entity';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'Inkhub',
      synchronize: true,
      entities: [User, Studio, Comment, BlockedDate, Scheduling],
    }),
    StudiosModule,
    CommentsModule,
    BlockedDatesModule,
    SchedulingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
