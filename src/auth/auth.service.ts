import { Injectable } from '@nestjs/common';
import { AuthRepository } from './repositorys/auth.repositorys';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';

@Injectable()
export class AuthService {
  constructor(private authRepo: AuthRepository) { }

  async Login (LoginAuthDto: LoginAuthDto) {
    const AuthLogin =  await this.authRepo.LoginApi(LoginAuthDto)
    return AuthLogin;
  }
  async Register (registerAuthDto: RegisterAuthDto) {
    const RegisterApi =  await this.authRepo.Register(registerAuthDto)
    return RegisterApi;
  }

  // findAll() {
  //   return `This action returns all auth`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} auth`;
  // }

  // update(id: number, updateAuthDto: UpdateAuthDto) {
  //   return `This action updates a #${id} auth`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} auth`;
  // }
}
