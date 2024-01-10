"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TdsService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let TdsService = class TdsService {
    async getHello() {
        var config = {
            method: 'get',
            url: 'https://traodoisub.com/api/?fields=reaction&access_token=TDSQfigjclZXZzJiOiIXZ2V2ciwiIzIzM5VHZ5VHZ5VHZiojIyV2c1Jye',
            headers: {},
        };
        const response = await (0, axios_1.default)(config);
        console.log(response.data);
        return response.data;
    }
};
exports.TdsService = TdsService;
exports.TdsService = TdsService = __decorate([
    (0, common_1.Injectable)()
], TdsService);
//# sourceMappingURL=tds.service.js.map