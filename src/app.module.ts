import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { RefreshTokenModule } from './refresh-token/refresh-token.module';
import { ProvidersModule } from './providers/providers.module';

@Module({
  imports: [AuthModule, UsersModule, RefreshTokenModule, ProvidersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
