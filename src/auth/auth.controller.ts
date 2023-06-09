import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './decorators/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  singIn(@Body() singInDto: Record<string, any>) {
    return this.authService.singIn(singInDto.username, singInDto.password);
  }

  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
