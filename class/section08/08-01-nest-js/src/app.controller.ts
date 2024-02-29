import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  // private readonly -> 이 클래스 안에서 읽기만 가능!
  constructor(private readonly appService: AppService) {} // private readonly 가 있기 때문에 중괄호 안쪽 등 빠질 수 있음!

  @Get('/products/buy') //엔드포인트가 들어가는 곳
  getHello(): string {
    const qqq = 3;
    const profile = {
      age: 13,
      school: '다람쥐초등학교',
    };
    return this.appService.getHello();
  }
}
