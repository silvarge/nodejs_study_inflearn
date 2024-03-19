import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.DEFAULT }) // injection scope - 싱글톤(new 한 번)으로 할래, 말래?
// Scope.DEFAULT - 싱글톤 - 앱 전체에서 한 번
// Scope.REQUEST - 매 요청마다 new - 요청할 때에 딱 한 번
// Scope.TRANSIENT - 수시로 (필요할 때 마다 new를 계속함) - 사용할 때마다 한 번씩 (매 주입마다 new)
export class BoardsService {
  getHello(): string {
    return 'Hello World!';
  }
}
