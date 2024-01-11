import { FacebookService } from './facebook.service';
export declare class FacebookController {
    private readonly facebookService;
    constructor(facebookService: FacebookService);
    getInformation(cookie: string): Promise<false | {
        uid: any;
        username: any;
    }>;
    Reaction(IdPost: string, Reaction: string): Promise<string | false>;
    ReactionComment(IdPost: string, Reaction: string): Promise<string | false>;
    Comment(IdPost: string, content: string): Promise<string | false>;
    Like(IdPost: string): Promise<string | false>;
    LikeComment(IdPost: string): Promise<string | false>;
    Share(IdPost: string, Content: string): Promise<string | false>;
    Follow(IdPost: string): Promise<string | false>;
}
