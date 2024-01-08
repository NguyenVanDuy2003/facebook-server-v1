import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { FacebookService } from './facebook.service';

@Controller('facebook')
export class FacebookController {
    constructor(private readonly facebookService: FacebookService) {}

    @Post()
    getInformation(@Body('cookie') cookie:string) {
        return this.facebookService.getInformation(cookie);
    }
}
