"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacebookService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let FacebookService = class FacebookService {
    async getInformation(cookieString) {
        const headers = {
            authority: 'mbasic.facebook.com',
            accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'accept-Language': 'en-US,en;q=0.9,vi;q=0.8',
            'cache-control': 'max-age=0',
            dpr: '1',
            referer: 'https://mbasic.facebook.com',
            'sec-ch-prefers-color-sheme': 'dark',
            'sec-ch-ua': '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
            'sec-ch-ua-full-version-list': '"Google Chrome";v="119.0.6045.160", "Chromium";v="119.0.6045.160", "Not?A_Brand";v="24.0.0.0"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-model': '""',
            'sec-ch-ua-platform': '"Windows"',
            'sec-ch-ua-platform-version': '"7.0.0"',
            'sec-fetch-dest': 'document',
            'sec-fetch-mode': 'navigate',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-user': '?1',
            'upgrade-insecure-requests': '1',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36',
            'viewport-width': '708',
            cookie: cookieString,
        };
        const cookieArray = cookieString.split(";");
        const cookies = {};
        cookieArray.forEach((cookie) => {
            const [key, value] = cookie.trim().split("=");
            cookies[key] = value;
        });
        const uid = cookies["c_user"];
        const res = await (0, axios_1.default)({
            method: "get",
            url: `https://mbasic.facebook.com/${uid}`,
            headers: headers,
        });
        if (res.status === 200) {
            const username = res.data.split('<title>')[1].split('</')[0];
            return {
                uid: uid,
                username: username
            };
        }
        else {
            console.error(`Request failed with status: ${res.status}`);
            return false;
        }
    }
};
exports.FacebookService = FacebookService;
exports.FacebookService = FacebookService = __decorate([
    (0, common_1.Injectable)()
], FacebookService);
//# sourceMappingURL=facebook.service.js.map