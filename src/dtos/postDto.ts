import { IsArray, IsString, MaxLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class PostDto {


  @IsArray({message: "Должен быть массив"})
  @IsString({each: true, message:"Элементы должны быть строками"})
  //@MaxLength(4, {each: false, message: "Массив может содержать максимум 4 значения" })
  @ApiProperty({ description: "Массив объекта"})
  arr: Array<String>;
}