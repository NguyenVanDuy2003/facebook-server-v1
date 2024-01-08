import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TdsController } from './tds/tds.controller';
import { TdsService } from './tds/tds.service';
import { TdsModule } from './tds/tds.module';
import { FacebookModule } from './facebook/facebook.module';

@Module({
  imports: [TdsModule, FacebookModule],
  controllers: [AppController, TdsController],
  providers: [AppService, TdsService],
})
export class AppModule {}
