import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AuthRepository } from './repositorys/auth.repositorys';

@Module({
  controllers: [AuthController],
  providers: [AuthService, AuthRepository]
})
export class AuthModule {}
