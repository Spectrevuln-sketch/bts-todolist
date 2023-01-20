import { Injectable } from "@nestjs/common";
import axios from "axios"
import { ConfigService } from '@nestjs/config';
@Injectable()
export class AuthRepository {
  constructor(private configService: ConfigService) {}


async LoginApi(payload:any){
  try {
    const GetLogin = await axios.post(`${this.configService.get('THIRD_URL')}/login`, {
      username: payload.username,
      password: payload.password
    })
    return{
      status: true,
      message:`Success Mengambil Data `,
      data: GetLogin.data
    }
    
  } catch (err) {
    return{
      status: false,
      message:err?.response?.data
    }
  }
}
async Register(payload:any){
  try {
    const RegisterApi = await axios.post(`${this.configService.get('THIRD_URL')}/register`, {
      email: payload.email,
      username: payload.username,
      password: payload.password
    })
    return{
      status: true,
      message:`Success Mengambil Data `,
      data: RegisterApi.data
    }
    
  } catch (err) {
    return{
      status: false,
      message:err?.response?.data
    }
  }
}
}


