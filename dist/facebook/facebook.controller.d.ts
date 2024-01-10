import { FacebookService } from './facebook.service';
export declare class FacebookController {
    private readonly facebookService;
    constructor(facebookService: FacebookService);
    getInformation(cookie: string): Promise<false | {
        uid: any;
        username: any;
    }>;
}
