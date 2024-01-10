import { TdsService } from './tds.service';
export declare class TdsController {
    private readonly tdsService;
    constructor(tdsService: TdsService);
    getHello(): Promise<any>;
}
