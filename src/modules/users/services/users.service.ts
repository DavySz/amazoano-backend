import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDTO } from '../dtos/create-user.dto';
import { UpdateUserDTO } from '../dtos/update-user.dto';
import { User } from '../entities/user.entity';
import { hash } from 'bcrypt';

import { v4 } from 'uuid';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDTO: CreateUserDTO) {
    const { email, first_name, last_name, password, phone } = createUserDTO;
    const passwordHash = await hash(password, 8);

    const user = this.userRepository.create({
      email,
      phone,
      last_name,
      first_name,
      userId: v4(),
      password: passwordHash,
    });

    return this.userRepository.save(user);
  }

  async update(userId: string, updateUserDTO: UpdateUserDTO) {
    const user = await this.userRepository.preload({
      userId: userId,
      ...updateUserDTO,
    });

    if (!user) {
      throw new NotFoundException(`User ID ${userId} not found`);
    }

    return this.userRepository.save(user);
  }

  async delete(userId: string) {
    const user = await this.userRepository.findBy({ userId: userId });
    if (!user) {
      throw new NotFoundException(`User ID ${userId} not found`);
    }

    return this.userRepository.remove(user);
  }
}
