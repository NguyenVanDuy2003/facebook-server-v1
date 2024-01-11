import { Body, Controller, Get, Post } from '@nestjs/common';
import { TdsService } from './tds.service';

@Controller('tds')
export class TdsController {
    constructor(private readonly tdsService: TdsService) {}
    @Get()
    getMissions() {
      return this.tdsService.getMissions();
    }

    @Post()
    receiveCoins(@Body('type') type: string, @Body('id_job') id_job: string){
      return this.tdsService.receiveCoins(type, id_job);
    }

   
}
