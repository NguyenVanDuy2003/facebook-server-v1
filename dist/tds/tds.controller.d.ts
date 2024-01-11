import { TdsService } from './tds.service';
export declare class TdsController {
    private readonly tdsService;
    constructor(tdsService: TdsService);
    getMissions(): Promise<any>;
    receiveCoins(type: string, id_job: string): Promise<any>;
}
