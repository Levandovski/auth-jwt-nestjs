import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { Public } from 'src/auth/decorators/public.decorator';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Public()
  @HttpCode(HttpStatus.CREATED)
  @Post()
  createUser(@Body() body: any) {
    return this.userService.createUser(body);
  }
}
