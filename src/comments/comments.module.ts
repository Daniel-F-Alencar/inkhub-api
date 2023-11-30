import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from 'src/comments/entities/comment.entity';
import { User } from 'src/users/entities/user.entity';
import { Studio } from 'src/studios/entities/studio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Comment, User, Studio])],
  controllers: [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}
