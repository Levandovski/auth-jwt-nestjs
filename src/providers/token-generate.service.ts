import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TokenGenerateService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async generateToken(id: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        id,
      },
    });

    const payload = { username: user.username, sub: user.id };

    const token = await this.jwtService.signAsync(payload);

    return token;
  }
}
