import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { AuthGuard } from './auth.guard';
import { RefreshTokenModule } from 'src/refresh-token/refresh-token.module';
import { ProvidersModule } from 'src/providers/providers.module';

@Module({
  imports: [
    UsersModule,
    RefreshTokenModule,
    ProvidersModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AuthController],
  providers: [{ provide: 'APP_GUARD', useClass: AuthGuard }, AuthService],
})
export class AuthModule {}
