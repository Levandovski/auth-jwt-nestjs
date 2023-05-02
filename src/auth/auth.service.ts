import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { TokenGenerateService } from 'src/providers/token-generate.service';
import { RefreshTokenGenerateService } from 'src/providers/refresh-token-generate.service';

@Injectable()
export class AuthService {
  constructor(
    private usersServices: UsersService,
    private TokenGenerate: TokenGenerateService,
    private tokenRefreshGenerate: RefreshTokenGenerateService,
  ) {}

  async singIn(username: string, pass: string): Promise<any> {
    const user = await this.usersServices.findOne(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }

    const token = await this.TokenGenerate.generateToken(user.id);
    const tokenRefresh = await this.tokenRefreshGenerate.generateRefreshToken(
      user.id,
    );

    return { access_token: token, refreshToken: tokenRefresh };
  }
}
