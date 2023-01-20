import { Module } from '@nestjs/common';
import { ChecklistService } from './checklist.service';
import { ChecklistController } from './checklist.controller';
import { ChecklistRepository } from './repositorys/checklist.repositorys';

@Module({
  controllers: [ChecklistController],
  providers: [ChecklistService, ChecklistRepository]
})
export class ChecklistModule {}
