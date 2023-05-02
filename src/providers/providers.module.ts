import { Module } from '@nestjs/common';
import { TokenGenerateService } from './token-generate.service';
import { RefreshTokenGenerateService } from './refresh-token-generate.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  exports: [TokenGenerateService, RefreshTokenGenerateService],
  providers: [TokenGenerateService, RefreshTokenGenerateService],
})
export class ProvidersModule {}
