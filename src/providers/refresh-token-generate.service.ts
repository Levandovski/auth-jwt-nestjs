import { Injectable } from '@nestjs/common';
import dayjs from 'dayjs';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RefreshTokenGenerateService {
  constructor(private prisma: PrismaService) {}

  async generateRefreshToken(userId: string) {
    console.log('AQUIII', userId);
    const expireIn: any = dayjs().add(15, 'second').unix();
    console.log('expireIn', expireIn);
    const refreshToken = await this.prisma.refreshToken.create({
      data: {
        userId,
        expireIn,
      },
    });

    return refreshToken;
  }
}
