export declare class FacebookService {
    getInformation(cookieString: string): Promise<false | {
        uid: any;
        username: any;
    }>;
}
