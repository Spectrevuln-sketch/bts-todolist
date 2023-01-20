import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Put } from '@nestjs/common';
import { ChecklistItemsService } from './checklist-items.service';
import { CreateChecklistItemDto, ParamsDto } from './dto/create-checklist-item.dto';
import { UpdateChecklistItemDto } from './dto/update-checklist-item.dto';
import { ApiTags } from '@nestjs/swagger';
import axios from "axios"
import { ConfigService } from '@nestjs/config';
@ApiTags('checklist-items')
@Controller({path: 'checklist-items', version: '1'})

export class ChecklistItemsController {
  constructor(private readonly checklistItemsService: ChecklistItemsService, private configService: ConfigService) {}

  // @Post()
  // create(@Body() createChecklistItemDto: CreateChecklistItemDto) {
  //   return this.checklistItemsService.create(createChecklistItemDto);
  // }

  @Get(':checklistId')
  async findAll(@Req() req, @Param('checklistId') id: string) {
    const token: string = req.headers['authorization'];
    try {
      const GetCurrent = await axios.delete(`${this.configService.get('THIRD_URL')}/checklist/${id}/item`,  {
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      return{
        status: true,
        message:`GetCurrent Data `,
        data: GetCurrent.data
      }
    } catch (err) {
      return{
        status: false,
        message:err?.response?.data
      }
    }
  }
  @Post('/create/:checklistId')
  async create(@Req() req, @Param('checklistId') id: string, @Body() createChecklistItemDto: CreateChecklistItemDto) {
    const token: string = req.headers['authorization'];
    try {
      const Create = await axios.post(`${this.configService.get('THIRD_URL')}/checklist/${id}/item`, {
        itemName: createChecklistItemDto.itemName
      },  {
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      return{
        status: true,
        message:`GetCurrent Data `,
        data: Create.data
      }
    } catch (err) {
      return{
        status: false,
        message:err?.response?.data
      }
    }
  }

  @Get('/get-current/:checklistId/:checkListItemId')
  async GetCurrentItems(@Req() req, @Param() params: ParamsDto) {
    const token: string = req.headers['authorization'];
    try {
      const Create = await axios.get(`${this.configService.get('THIRD_URL')}/checklist/${params.checklistId}/item/${params.checkListItemId}`, {
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      return{
        status: true,
        message:`GetCurrent Data `,
        data: Create.data
      }
    } catch (err) {
      return{
        status: false,
        message:err?.response?.data
      }
    }
  }

  @Put('/update-current/:checklistId/:checkListItemId')
  async update(@Req() req, @Param() params: ParamsDto) {
    const token: string = req.headers['authorization'];
    try {
      const Create = await axios.put(`${this.configService.get('THIRD_URL')}/checklist/${params.checklistId}/item/${params.checkListItemId}`, {
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      return{
        status: true,
        message:`GetCurrent Data `,
        data: Create.data
      }
    } catch (err) {
      return{
        status: false,
        message:err?.response?.data
      }
    }
  }

  @Delete('/update-current/:checklistId/:checkListItemId')
  async remove(@Req() req, @Param() params: ParamsDto,) {
    const token: string = req.headers['authorization'];
    try {
      const Create = await axios.delete(`${this.configService.get('THIRD_URL')}/checklist/${params.checklistId}/item/${params.checkListItemId}`, {
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      return{
        status: true,
        message:`GetCurrent Data `,
        data: Create.data
      }
    } catch (err) {
      return{
        status: false,
        message:err?.response?.data
      }
    }
  }

  @Put('/rename-current/:checklistId/:checkListItemId')
  async rename(@Req() req, @Param() params: ParamsDto, @Body() updateChecklistItemDto: UpdateChecklistItemDto) {
    const token: string = req.headers['authorization'];
    try {
      const Create = await axios.put(`${this.configService.get('THIRD_URL')}/checklist/${params.checklistId}/item/rename/${params.checkListItemId}`,{
        itemName: updateChecklistItemDto.itemName
      }, {
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      return{
        status: true,
        message:`GetCurrent Data `,
        data: Create.data
      }
    } catch (err) {
      return{
        status: false,
        message:err?.response?.data
      }
    }
  }
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.checklistItemsService.findOne(+id);
  // }


}
