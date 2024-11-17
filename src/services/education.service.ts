import { Injectable } from "@nestjs/common";

@Injectable()
export class EducationService{

  evaluateNumber(num){
    return Math.round(num/7 * 10) / 10;
  }

  addSymbol(array){
    return array.arr.map(el=>el+="!");
  }

}