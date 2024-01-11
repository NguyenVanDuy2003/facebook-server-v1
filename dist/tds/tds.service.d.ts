export declare class TdsService {
    tds_token_Job: string;
    tds_token: string;
    getMissions(): Promise<any>;
    receiveCoins(type: string, id_job: string): Promise<any>;
}
