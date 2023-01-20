import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ChecklistModule } from './checklist/checklist.module';
import { ChecklistItemsModule } from './checklist-items/checklist-items.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
      load: [],
    }),
    AuthModule, 
    ChecklistModule, 
    ChecklistItemsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
