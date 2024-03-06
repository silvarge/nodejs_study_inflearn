import { Controller, Get } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Query, Resolver } from '@nestjs/graphql';

// @Controller()
@Resolver()
export class BoardsResolver {
  // private readonly -> 이 클래스 안에서 읽기만 가능!
  constructor(private readonly boardsService: BoardsService) {} // private readonly 가 있기 때문에 중괄호 안쪽 등 빠질 수 있음!

  // @Get('/products/buy') //엔드포인트가 들어가는 곳
  @Query(() => String, { nullable: true }) // 있어도 되고, 없어도 되고 (! 삭제하기) -> nullable 적용
  fetchBoards(): string {
    return this.boardsService.getHello();
  }
}
