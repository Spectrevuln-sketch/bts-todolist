import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { ChecklistService } from './checklist.service';
import { CreateChecklistDto } from './dto/create-checklist.dto';
import { UpdateChecklistDto } from './dto/update-checklist.dto';
import { ApiTags } from '@nestjs/swagger';
import axios from "axios"
import { ConfigService } from '@nestjs/config';

@ApiTags('Checklist')
@Controller({path: 'checklist', version: '1'})
export class ChecklistController {
  constructor(private readonly checklistService: ChecklistService, private configService: ConfigService) {}

  @Get('checklist')
  async getAllChecklist(@Req() req) {
    const token: string = req.headers['authorization'];
    const allchecklist = await this.checklistService.findAll(token);
    console.log(allchecklist)
    return allchecklist;
  }

  @Post('create/checklist')
  async create(@Req() req, @Body() createChecklistDto: CreateChecklistDto) {
    const token: string = req.headers['authorization'];
    try {
      const CreateCheckList = await axios.post(`${this.configService.get('THIRD_URL')}/checklist`,{
        name: createChecklistDto.name
      },  {
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      return{
        status: true,
        message:`Cereate Mengambil Data `,
        data: CreateCheckList.data
      }
      console.log(CreateCheckList)
    } catch (err) {
      return{
        status: false,
        message:err?.response?.data
      }
    }
  }
  
    @Delete(':checklist')
    async remove(@Req() req,@Param('checklist') id: string) {
      const token: string = req.headers['authorization'];
    try {
      const DeleteChecklist = await axios.delete(`${this.configService.get('THIRD_URL')}/checklist/${id}`,  {
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      return{
        status: true,
        message:`Delete Data `,
        data: DeleteChecklist.data
      }
    } catch (err) {
      return{
        status: false,
        message:err?.response?.data
      }
    }
  }


}
