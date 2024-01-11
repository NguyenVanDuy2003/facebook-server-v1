import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { FacebookService } from './facebook.service';

@Controller('facebook')
export class FacebookController {
    constructor(private readonly facebookService: FacebookService) {}

    @Post()
    getInformation(@Body('cookie') cookie:string) {
        return this.facebookService.getInformation(cookie);
    }
    @Post('/reaction')
    Reaction(@Body('IdPost') IdPost:string, @Body('Reaction') Reaction:string) {
        return this.facebookService.Reactions(IdPost, Reaction);
    }
    @Post('/reactioncomment')
    ReactionComment(@Body('IdPost') IdPost:string, @Body('Reaction') Reaction:string) {
        return this.facebookService.ReactionComment(IdPost, Reaction);
    }
    @Post('/comment')
    Comment(@Body('IdPost') IdPost:string, @Body('content') content:string) {
        return this.facebookService.Comment(IdPost, content);
    }
    @Post('/like')
    Like(@Body('IdPost') IdPost:string) {
        return this.facebookService.LikePost(IdPost);
    }
    @Post('/likecomment')
    LikeComment(@Body('IdPost') IdPost:string) {
        return this.facebookService.LikeCommentPost(IdPost);
    }

    @Post('/share')
    Share(@Body('IdPost') IdPost:string , @Body('content') Content:string) {
        return this.facebookService.Share(IdPost,Content);
    }

    @Post('/follow')
    Follow(@Body('IdPost') IdPost:string) {
        return this.facebookService.FollowUser(IdPost);
    }
}
