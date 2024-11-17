import { EducationController } from "../controllers/education.controller";
import { Module } from "@nestjs/common";
import { EducationService } from "../services/education.service";

@Module({
    controllers: [EducationController],
    providers: [EducationService]})

export class EducationModule {


}