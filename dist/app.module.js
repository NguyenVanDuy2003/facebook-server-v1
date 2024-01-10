"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const tds_controller_1 = require("./tds/tds.controller");
const tds_service_1 = require("./tds/tds.service");
const tds_module_1 = require("./tds/tds.module");
const facebook_module_1 = require("./facebook/facebook.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [tds_module_1.TdsModule, facebook_module_1.FacebookModule],
        controllers: [app_controller_1.AppController, tds_controller_1.TdsController],
        providers: [app_service_1.AppService, tds_service_1.TdsService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map