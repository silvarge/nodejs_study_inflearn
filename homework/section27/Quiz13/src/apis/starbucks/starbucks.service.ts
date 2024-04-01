import { Injectable, Scope } from '@nestjs/common';
import { IStarbucksServiceCreate } from './interfaces/starbucks-service.interface';
import { Starbucks } from './entities/starbucks.entity';

@Injectable({ scope: Scope.DEFAULT })
export class StarbucksService {
  getFetchCoffee(): Starbucks[] {
    const result = [
      {
        id: 1,
        name: '바닐라 크림 콜드브루',
        price: 5800,
        amount: 125,
        saturatedFat: 6,
        protein: 3,
        sodium: 58,
        sugars: 11,
        caffeine: 150,
      },
      {
        id: 2,
        name: '바닐라 크림 콜드브루',
        price: 5800,
        amount: 125,
        saturatedFat: 6,
        protein: 3,
        sodium: 58,
        sugars: 11,
        caffeine: 150,
      },
      {
        id: 3,
        name: '바닐라 크림 콜드브루',
        price: 5800,
        amount: 125,
        saturatedFat: 6,
        protein: 3,
        sodium: 58,
        sugars: 11,
        caffeine: 150,
      },
    ];
    return result;
  }

  create({ createStarbucksInput }: IStarbucksServiceCreate): string {
    console.log(createStarbucksInput);

    return '등록에 성공하였습니다.';
  }
}
