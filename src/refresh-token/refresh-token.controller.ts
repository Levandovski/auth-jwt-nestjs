import { Controller, Post, Body } from '@nestjs/common';
import { RefreshTokenService } from './refresh-token.service';
import { Public } from 'src/auth/decorators/public.decorator';

@Controller('refresh-token')
export class RefreshTokenController {
  constructor(private readonly refreshTokenService: RefreshTokenService) {}

  @Public()
  @Post()
  refreshToken(@Body() refreshTokenDto: any) {
    return this.refreshTokenService.refreshToken(refreshTokenDto?.refreshToken);
  }
}
