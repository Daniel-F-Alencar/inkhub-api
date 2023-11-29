import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
// import { UpdateCommentDto } from './dto/update-comment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { Comment } from 'src/comments/entities/comment.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentsRepository: Repository<Comment>,
  ) {}
  async create(createCommentDto: CreateCommentDto) {
    const comment: DeepPartial<Comment> = {
      content: createCommentDto.content,
      user: { id: createCommentDto.user },
      studio: { id: createCommentDto.studio },
    };

    return await this.commentsRepository.save(comment);
  }

  findAll(studioId: number) {
    return this.commentsRepository.find({
      where: { studio: { id: studioId } },
      relations: ['user', 'studio'],
    });
  }

  // update(id: number, updateCommentDto: UpdateCommentDto) {
  //   return `This action updates a #${id} comment`;
  // }

  async remove(id: number) {
    const comment = await this.commentsRepository.findOne({ where: { id } });
    return await this.commentsRepository.remove(comment);
  }
}
