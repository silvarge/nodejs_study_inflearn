import { Module } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardsResolver } from './boards.resolver';

@Module({
  imports: [],
  providers: [BoardsResolver, BoardsService], // 의존성 주입
})
export class BoardsModule {}
