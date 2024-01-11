"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacebookController = void 0;
const common_1 = require("@nestjs/common");
const facebook_service_1 = require("./facebook.service");
let FacebookController = class FacebookController {
    constructor(facebookService) {
        this.facebookService = facebookService;
    }
    getInformation(cookie) {
        return this.facebookService.getInformation(cookie);
    }
    Reaction(IdPost, Reaction) {
        return this.facebookService.Reactions(IdPost, Reaction);
    }
    ReactionComment(IdPost, Reaction) {
        return this.facebookService.ReactionComment(IdPost, Reaction);
    }
    Comment(IdPost, content) {
        return this.facebookService.Comment(IdPost, content);
    }
    Like(IdPost) {
        return this.facebookService.LikePost(IdPost);
    }
    LikeComment(IdPost) {
        return this.facebookService.LikeCommentPost(IdPost);
    }
    Share(IdPost, Content) {
        return this.facebookService.Share(IdPost, Content);
    }
    Follow(IdPost) {
        return this.facebookService.FollowUser(IdPost);
    }
};
exports.FacebookController = FacebookController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('cookie')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FacebookController.prototype, "getInformation", null);
__decorate([
    (0, common_1.Post)('/reaction'),
    __param(0, (0, common_1.Body)('IdPost')),
    __param(1, (0, common_1.Body)('Reaction')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], FacebookController.prototype, "Reaction", null);
__decorate([
    (0, common_1.Post)('/reactioncomment'),
    __param(0, (0, common_1.Body)('IdPost')),
    __param(1, (0, common_1.Body)('Reaction')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], FacebookController.prototype, "ReactionComment", null);
__decorate([
    (0, common_1.Post)('/comment'),
    __param(0, (0, common_1.Body)('IdPost')),
    __param(1, (0, common_1.Body)('content')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], FacebookController.prototype, "Comment", null);
__decorate([
    (0, common_1.Post)('/like'),
    __param(0, (0, common_1.Body)('IdPost')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FacebookController.prototype, "Like", null);
__decorate([
    (0, common_1.Post)('/likecomment'),
    __param(0, (0, common_1.Body)('IdPost')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FacebookController.prototype, "LikeComment", null);
__decorate([
    (0, common_1.Post)('/share'),
    __param(0, (0, common_1.Body)('IdPost')),
    __param(1, (0, common_1.Body)('content')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], FacebookController.prototype, "Share", null);
__decorate([
    (0, common_1.Post)('/follow'),
    __param(0, (0, common_1.Body)('IdPost')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FacebookController.prototype, "Follow", null);
exports.FacebookController = FacebookController = __decorate([
    (0, common_1.Controller)('facebook'),
    __metadata("design:paramtypes", [facebook_service_1.FacebookService])
], FacebookController);
//# sourceMappingURL=facebook.controller.js.map