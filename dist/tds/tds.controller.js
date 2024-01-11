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
exports.TdsController = void 0;
const common_1 = require("@nestjs/common");
const tds_service_1 = require("./tds.service");
let TdsController = class TdsController {
    constructor(tdsService) {
        this.tdsService = tdsService;
    }
    getMissions() {
        return this.tdsService.getMissions();
    }
    receiveCoins(type, id_job) {
        return this.tdsService.receiveCoins(type, id_job);
    }
};
exports.TdsController = TdsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TdsController.prototype, "getMissions", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('type')),
    __param(1, (0, common_1.Body)('id_job')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], TdsController.prototype, "receiveCoins", null);
exports.TdsController = TdsController = __decorate([
    (0, common_1.Controller)('tds'),
    __metadata("design:paramtypes", [tds_service_1.TdsService])
], TdsController);
//# sourceMappingURL=tds.controller.js.map