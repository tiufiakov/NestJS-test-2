import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EducationModule } from "./modules/education.module";

@Module({
  imports: [EducationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
