import { Module } from '@nestjs/common';
import { RefreshTokenService } from './refresh-token.service';
import { RefreshTokenController } from './refresh-token.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ProvidersModule } from 'src/providers/providers.module';

@Module({
  imports: [PrismaModule, ProvidersModule],
  exports: [RefreshTokenService],
  controllers: [RefreshTokenController],
  providers: [RefreshTokenService],
})
export class RefreshTokenModule {}
