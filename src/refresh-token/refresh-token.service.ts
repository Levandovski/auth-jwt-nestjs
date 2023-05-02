import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import dayjs from 'dayjs';
import { TokenGenerateService } from 'src/providers/token-generate.service';
import { RefreshTokenGenerateService } from 'src/providers/refresh-token-generate.service';

@Injectable()
export class RefreshTokenService {
  constructor(
    private prisma: PrismaService,
    private tokenGenerate: TokenGenerateService,
    private tokenRefreshGenerate: RefreshTokenGenerateService,
  ) {}

  async findOne(id: string) {
    return await this.prisma.refreshToken.findFirst({
      where: {
        id,
      },
    });
  }

  async remove(userId: string) {
    return await this.prisma.refreshToken.deleteMany({
      where: {
        userId,
      },
    });
  }

  async refreshToken(refresh_token: string) {
    const refreshToken = await this.findOne(refresh_token);

    if (!refreshToken) throw new Error('Refresh token invalid');

    const refreshTokenExpired = dayjs().isAfter(
      dayjs.unix(refreshToken.expireIn),
    );

    const token = await this.tokenGenerate.generateToken(refreshToken.userId);

    if (refreshTokenExpired) {
      await this.remove(refreshToken.userId);
      const newRefreshToken =
        await this.tokenRefreshGenerate.generateRefreshToken(
          refreshToken.userId,
        );

      return { access_token: token, refreshToken: newRefreshToken };
    }

    return { access_token: token };
  }
}
