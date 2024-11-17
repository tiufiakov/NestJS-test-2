import { Body, Controller, Get, HttpStatus, Param, ParseIntPipe, Post } from "@nestjs/common";
import { EducationService } from "../services/education.service";
import { PostDto } from "../dtos/postDto";
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags("Education")
@Controller()
export class EducationController {

  constructor(private readonly  educationService : EducationService) {}

  @ApiOperation({summary: "Деление числа на 7 и округление до десятых"})
  @ApiParam({name: "num", required: true, description: "Число"})
  @ApiResponse({ status: HttpStatus.OK, description: "Success", type: Number })
  @Get("/:num")
  getMethod(@Param("num", ParseIntPipe) num: number){
    return this.educationService.evaluateNumber(num);
  }

  @ApiOperation({summary: "Возврат массива со знаком '!' в конце"})
  @ApiParam({name: "arr", required: true, description: "Массив"})
  @ApiResponse({ status: HttpStatus.OK, description: "Success", type:PostDto })
  @Post()
  postMethod(@Body() array: PostDto){
    return this.educationService.addSymbol(array);
  }

}