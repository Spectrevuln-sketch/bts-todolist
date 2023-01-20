import { Injectable } from '@nestjs/common';
import { CreateChecklistDto } from './dto/create-checklist.dto';
import { UpdateChecklistDto } from './dto/update-checklist.dto';
import * as jwtmethod from 'src/utils/jwtAuth.utils';
import { ChecklistRepository } from './repositorys/checklist.repositorys';

@Injectable()
export class ChecklistService {
  constructor(private checklistRepo: ChecklistRepository) { }

  create(createChecklistDto: CreateChecklistDto) {
    return 'This action adds a new checklist';
  }
  
  async findAll(token:string) {
    const getallChecklist: any = await this.checklistRepo.FindAll(token)
    return getallChecklist;
  }

 
}
