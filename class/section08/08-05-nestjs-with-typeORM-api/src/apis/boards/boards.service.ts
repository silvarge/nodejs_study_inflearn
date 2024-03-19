import { Injectable, Scope } from '@nestjs/common';
import { Board } from './entities/board.entity';

@Injectable({ scope: Scope.DEFAULT }) // injection scope - 싱글톤(new 한 번)으로 할래, 말래?
// Scope.DEFAULT - 싱글톤 - 앱 전체에서 한 번
// Scope.REQUEST - 매 요청마다 new - 요청할 때에 딱 한 번
// Scope.TRANSIENT - 수시로 (필요할 때 마다 new를 계속함) - 사용할 때마다 한 번씩 (매 주입마다 new)
export class BoardsService {
  findAll(): Board[] {
    const result = [
      { id: 1, writer: '철수', title: '제목', contents: '내용' },
      { id: 2, writer: '철수2', title: '제목2', contents: '내용2' },
      { id: 3, writer: '철수3', title: '제목3', contents: '내용3' },
    ];
    return result;
  }

  create(writer: string, title: string, contents: string): string {
    // 1. DB에 접속해서 등록했다 가정
    console.log(writer);
    console.log(title);
    console.log(contents);

    // 2. 제대로 다 됐으면 리턴
    return '게시물 등록에 성공하였습니다.';
  }
}
