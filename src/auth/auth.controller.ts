import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { ApiTags } from '@nestjs/swagger';
import { RegisterAuthDto } from './dto/register-auth.dto';

@ApiTags('Auth')
@Controller({path: 'auth', version: '1'})
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  async Login(@Res() res, @Body() LoginAuthDto: LoginAuthDto) {
    const Login = await this.authService.Login(LoginAuthDto);
    if(Login.status === false)
      return res.status(400).json(Login)
    return res.status(200).cookie('token', Login.data.data.token).json(Login)
  }

  @Post('/register')
  async Register(@Res() res, @Body() registerAuthDto: RegisterAuthDto) {
    const RegisterHandle = await this.authService.Register(registerAuthDto);
    if(RegisterHandle.status === false)
      return res.status(400).json(RegisterHandle)
    return res.status(200).json(RegisterHandle)
  }

  
}
