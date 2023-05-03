import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { Public } from 'src/auth/decorators/public.decorator';
import { UsersService } from './users.service';
import { CreateUsersDto } from './dto/create-users.dto/create-users.dto';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Public()
  @HttpCode(HttpStatus.CREATED)
  @Post()
  createUser(@Body() createUsersDto: CreateUsersDto) {
    return this.userService.createUser(createUsersDto);
  }
}
