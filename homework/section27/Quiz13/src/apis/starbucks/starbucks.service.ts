import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.DEFAULT })
export class StarbucksService {
  getFetchCoffee(): string {
    return '스타벅스 커피 목록을 조회합니다.';
  }

  create({ createStarbucksInput }: IStarbucksServiceCreate): string {
    console.log();

    return '등록에 성공하였습니다.';
  }
}
