import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {}
  private users: User[] = [];

  async create(createUserDto: CreateUserDto) {
    const user = {
      ...createUserDto,
    };

    return await this.usersRepository.save(user);
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: number) {
    const index = this.users.findIndex((user) => user.id === id);
    return this.users[index];
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepository.findOne({ where: { id } });
    Object.assign(user, updateUserDto);
    return await this.usersRepository.save(user);
  }

  async remove(id: number) {
    const user = await this.usersRepository.findOne({ where: { id } });
    return await this.usersRepository.remove(user);
  }
}
