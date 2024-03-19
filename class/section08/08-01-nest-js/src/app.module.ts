import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController], // controller
  providers: [AppService], // 의존성 주입 -> new AppController(AppService)
})
export class AppModule {}
