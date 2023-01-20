import { Injectable } from "@nestjs/common";
import axios from "axios"
import { ConfigService } from '@nestjs/config';
@Injectable()
export class ChecklistRepository {
  constructor(private configService: ConfigService) {}


async FindAll(token:string){
  try {
    const GetChecklist = await axios.get(`${this.configService.get('THIRD_URL')}/checklist`, {
      headers:{
        Authorization:`Bearer ${token}`,
        "Accept-Encoding": "gzip,deflate,compress"
      }
    })
    return{
      status: true,
      message:`Success Mengambil Data `,
      data: GetChecklist.data
    }
    console.log(GetChecklist)
  } catch (err) {
    return{
      status: false,
      message:err?.response?.data
    }
  }
}

}


