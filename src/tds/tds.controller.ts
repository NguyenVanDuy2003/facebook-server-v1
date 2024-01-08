import { Controller, Get } from '@nestjs/common';
import { TdsService } from './tds.service';

@Controller('tds')
export class TdsController {
    constructor(private readonly tdsService: TdsService) {}
    @Get()
    getHello() {
      return this.tdsService.getHello();
    }
}
