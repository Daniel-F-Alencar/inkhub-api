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
import { ConfigModule } from '@nestjs/config';
import { BlockedDatesModule } from './blocked-dates/blocked-dates.module';
import { BlockedDate } from 'src/blocked-dates/entities/blocked-date.entity';
import { SchedulingModule } from './scheduling/scheduling.module';
import { Scheduling } from 'src/scheduling/entities/scheduling.entity';

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: 5432,
      username: 'postgres',
      password: process.env.DATABASE_PASSWORD,
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
