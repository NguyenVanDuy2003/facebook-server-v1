export declare class FacebookService {
    Request: (method: string, url: string, headers: any, data?: any) => Promise<any>;
    getInformation(cookieString: string): Promise<false | {
        uid: any;
        username: any;
    }>;
    Reactions(IdPost: any, Reaction: string): Promise<string | false>;
    ReactionComment(IdPost: string, Reaction: string): Promise<string | false>;
    LikePost(IdPost: string): Promise<string | false>;
    LikeCommentPost(IdPost: string): Promise<string | false>;
    Comment(IdPost: string, content: string): Promise<string | false>;
    Share(IdPost: string, content: string): Promise<string | false>;
    FollowUser(IdPost: string): Promise<string | false>;
}
