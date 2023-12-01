import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '@nestjs-microservices/shared/dto';
import { User } from '@nestjs-microservices/shared/entities';
import { UserRepository } from './user.repository';
@Injectable()
export class AppService {
  constructor (
    private readonly userRepository : UserRepository
  ) {}

  createUser(data: CreateUserDto): void {
    this.userRepository.save(data);
  }

  getUser(id: number): User {
    return this.userRepository.findOne(id);
  }
}
