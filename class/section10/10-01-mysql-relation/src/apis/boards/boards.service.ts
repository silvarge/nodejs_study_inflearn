import { Injectable, Scope } from '@nestjs/common';
import { Board } from './entities/board.entity';
import { IBoardsServiceCreate } from './interfaces/boards-service.interface';

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

  create({ createBoardInput }: IBoardsServiceCreate): string {
    // 1. DB에 접속해서 등록했다 가정
    console.log(createBoardInput.writer);
    console.log(createBoardInput.title);
    console.log(createBoardInput.contents);

    // 2. DB 접속 후 데이터 저장

    // 3. 성공했으면 리턴
    return '게시물 등록에 성공하였습니다.';
  }
}
