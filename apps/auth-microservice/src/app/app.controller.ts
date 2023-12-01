import { Controller , ValidationPipe  ,ParseIntPipe} from '@nestjs/common';
import { EventPattern , Payload ,MessagePattern } from '@nestjs/microservices';
import { CreateUserDto } from '@nestjs-microservices/shared/dto';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('create_user')
  handleUserCreate(@Payload(ValidationPipe) data: CreateUserDto) {
    this.appService.createUser(data);
  }

  @MessagePattern('get_user')
  handleGetUser(@Payload('userId', ParseIntPipe) userId: number) {
    return this.appService.getUser(userId);
  }
}
