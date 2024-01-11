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
    constructor() {
        this.Request = async (method, url, headers, data = {}) => {
            const res = await (0, axios_1.default)({
                method: method,
                url: url,
                headers: headers,
                data: data
            });
            if (res.status < 400) {
                return res.data;
            }
            else {
                console.error(`Request failed with status: ${res.status}`);
                return false;
            }
        };
    }
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
    async Reactions(IdPost, Reaction) {
        console.log(IdPost);
        try {
            const cookieString = "c_user=100094320435884;xs=2:mmeEgQwO5YYlGA:2:1700065635:-1:-1;fr=0k6f2QTuOtTmH4Y5f.AWVtkwPwn98GkzAPeVaEo5etGqI.BlVPFj.hI.AAA.0.0.BlVPFj.AWVyrRTu7TQ;datr=WvFUZRLDHFBD_b87_HxeZQu9;";
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
            const url = `https://mbasic.facebook.com/${IdPost}`;
            const method = "get";
            const Home = await this.Request(method, url, headers);
            const urlreact = `https://mbasic.facebook.com/reactions/picker/?${Home.split("/reactions/picker/?")[1].split('"')[0].replaceAll("amp;", "")}`;
            const dataReact = await this.Request(method, urlreact, headers);
            const reactList = dataReact.match(/\/ufi\/reaction\/\?.*?"/g);
            const index = Reaction === 'LOVE' ? 1 : Reaction === 'CARE' ? 2 : Reaction === 'HAHA' ? 3 : Reaction === 'WOW' ? 4 : Reaction === 'SAD' ? 5 : 6;
            const urlReactComplete = `https://mbasic.facebook.com${reactList[index].replaceAll("amp;", "").replaceAll('"', "")}`;
            const dataReactComplete = await this.Request(method, urlReactComplete, headers);
            const now = new Date();
            const formattedTime = now.toTimeString().split(' ')[0];
            if (dataReactComplete !== false) {
                return `${formattedTime} | Bạn đã thả thả ${Reaction} vào POST | ${IdPost}`;
            }
            else {
                return `${formattedTime} | Không tìm thấy nút Reaction | ${Reaction}`;
            }
        }
        catch (error) {
            return false;
        }
    }
    async ReactionComment(IdPost, Reaction) {
        try {
            const cookieString = "c_user=100094320435884;xs=2:mmeEgQwO5YYlGA:2:1700065635:-1:-1;fr=0k6f2QTuOtTmH4Y5f.AWVtkwPwn98GkzAPeVaEo5etGqI.BlVPFj.hI.AAA.0.0.BlVPFj.AWVyrRTu7TQ;datr=WvFUZRLDHFBD_b87_HxeZQu9;";
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
            const url = `https://mbasic.facebook.com/${IdPost}`;
            const method = "get";
            const Home = await this.Request(method, url, headers);
            const urlreact = `https://mbasic.facebook.com/reactions/picker/?${Home.split("/reactions/picker/?")[2].split('"')[0].replace("amp;", "")}`;
            const dataReact = await this.Request(method, urlreact, headers);
            const reactList = dataReact.match(/\/ufi\/reaction\/\?.*?"/g);
            const index = Reaction === 'LOVE' ? 1 : Reaction === 'CARE' ? 2 : Reaction === 'HAHA' ? 3 : Reaction === 'WOW' ? 4 : Reaction === 'SAD' ? 5 : 6;
            const urlReactComplete = `https://mbasic.facebook.com${reactList[index].replaceAll("amp;", "").replaceAll('"', "")}`;
            const dataReactComplete = await this.Request(method, urlReactComplete, headers);
            const now = new Date();
            const formattedTime = now.toTimeString().split(' ')[0];
            if (dataReactComplete !== false) {
                return `${formattedTime} | Bạn đã thả thả ${Reaction}CMT vào POST | ${IdPost}`;
            }
            else {
                return `${formattedTime} | Không tìm thấy nút ReactionCMT | ${Reaction}`;
            }
        }
        catch (error) {
            return false;
        }
    }
    async LikePost(IdPost) {
        try {
            const cookieString = "c_user=100094320435884;xs=2:mmeEgQwO5YYlGA:2:1700065635:-1:-1;fr=0k6f2QTuOtTmH4Y5f.AWVtkwPwn98GkzAPeVaEo5etGqI.BlVPFj.hI.AAA.0.0.BlVPFj.AWVyrRTu7TQ;datr=WvFUZRLDHFBD_b87_HxeZQu9;";
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
            const url = `https://mbasic.facebook.com/${IdPost}`;
            const method = "get";
            const Home = await this.Request(method, url, headers);
            const likeNode = `https://mbasic.facebook.com/a/like.php?${Home.split("/a/like.php?")[1].split('"')[0].replace("amp;", "")}`;
            const dataReact = await this.Request(method, likeNode, headers);
            const now = new Date();
            const formattedTime = now.toTimeString().split(' ')[0];
            if (dataReact !== false) {
                return `${formattedTime} | Bạn đã thả thả LIKE vào POST | ${IdPost}`;
            }
            else {
                return `${formattedTime} | Không tìm thấy nút LIKE | ${IdPost}`;
            }
        }
        catch (error) {
            return false;
        }
    }
    async LikeCommentPost(IdPost) {
        try {
            const cookieString = "c_user=100094320435884;xs=2:mmeEgQwO5YYlGA:2:1700065635:-1:-1;fr=0k6f2QTuOtTmH4Y5f.AWVtkwPwn98GkzAPeVaEo5etGqI.BlVPFj.hI.AAA.0.0.BlVPFj.AWVyrRTu7TQ;datr=WvFUZRLDHFBD_b87_HxeZQu9;";
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
            const url = `https://mbasic.facebook.com/${IdPost}`;
            const method = "get";
            const Home = await this.Request(method, url, headers);
            const likeNode = `https://mbasic.facebook.com/a/comment.php?${Home.split("/a/comment.php?")[1].split('"')[0].replace("amp;", "")}`;
            const dataReact = await this.Request(method, likeNode, headers);
            const now = new Date();
            const formattedTime = now.toTimeString().split(' ')[0];
            if (dataReact !== false) {
                return `${formattedTime} | Bạn đã thả thả LIKECOMMENT vào POST | ${IdPost}`;
            }
            else {
                return `${formattedTime} | Không tìm thấy nút LIKECOMMENT | ${IdPost}`;
            }
        }
        catch (error) {
            return false;
        }
    }
    async Comment(IdPost, content) {
        try {
            const cookieString = "c_user=100094320435884;xs=2:mmeEgQwO5YYlGA:2:1700065635:-1:-1;fr=0k6f2QTuOtTmH4Y5f.AWVtkwPwn98GkzAPeVaEo5etGqI.BlVPFj.hI.AAA.0.0.BlVPFj.AWVyrRTu7TQ;datr=WvFUZRLDHFBD_b87_HxeZQu9;";
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
            const url = `https://mbasic.facebook.com/${IdPost}`;
            const method = "get";
            const Home = await this.Request(method, url, headers);
            const UrlPost = `https://mbasic.facebook.com/a/comment.php${Home.split('action="/a/comment.php')[1].split('"')[0].replace("amp;", "")}`;
            const fb_dtsg = Home.split('<input type="hidden" name="fb_dtsg" value="')[1].split('"')[0];
            const jazoest = Home.split('<input type="hidden" name="jazoest" value="')[1].split('"')[0];
            const data = {
                'fb_dtsg': fb_dtsg,
                'jazoest': jazoest,
                'comment_text': content,
            };
            const dataReact = await this.Request('post', UrlPost, headers, data);
            const now = new Date();
            const formattedTime = now.toTimeString().split(' ')[0];
            if (dataReact !== false) {
                return `${formattedTime} | Bạn đã COMMENT vào POST | ${IdPost} | ${content} `;
            }
            else {
                return `${formattedTime} | Không tìm thấy nút COMMENT | ${IdPost}`;
            }
        }
        catch (error) {
            return false;
        }
    }
    async Share(IdPost, content) {
        try {
            const cookieString = "c_user=100094320435884;xs=2:mmeEgQwO5YYlGA:2:1700065635:-1:-1;fr=0k6f2QTuOtTmH4Y5f.AWVtkwPwn98GkzAPeVaEo5etGqI.BlVPFj.hI.AAA.0.0.BlVPFj.AWVyrRTu7TQ;datr=WvFUZRLDHFBD_b87_HxeZQu9;";
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
            const url = `https://mbasic.facebook.com/${IdPost}`;
            const method = "get";
            const Home = await this.Request(method, url, headers);
            const ShareNode = `https://mbasic.facebook.com/composer/mbasic/?${Home.split("/composer/mbasic/?")[1].split('"')[0].replace("amp;", "")}`;
            const ShareWeb = await this.Request('get', ShareNode, headers);
            const UrlPost = `https://mbasic.facebook.com/composer/mbasic/?csid=${ShareWeb.split('action="/composer/mbasic/?csid=')[1].split('"')[0].replace("amp;", "")}`;
            const fb_dtsg = ShareWeb.split('name="fb_dtsg" value="')[1].split('"')[0];
            const jazoest = ShareWeb.split('name="jazoest" value="')[1].split('"')[0];
            const target = ShareWeb.split('name="target" value="')[1].split('"')[0];
            const csid = ShareWeb.split('name="csid" value="')[1].split('"')[0];
            const privacyx = ShareWeb.split('name="privacyx" value="')[1].split('"')[0];
            const appid = ShareWeb.split('name="appid" value="')[1].split('"')[0];
            const sid = ShareWeb.split('name="sid" value="')[1].split('"')[0];
            const shared_from_post_id = ShareWeb.split('name="shared_from_post_id" value="')[1].split('"')[0];
            const data = {
                'fb_dtsg': fb_dtsg,
                'jazoest': jazoest,
                'target': target,
                'csid': csid,
                'c_src': 'share',
                'referrer': 'permalink',
                'ctype': 'advanced',
                'cver': 'amber_share',
                'waterfall_source': 'advanced_composer_timeline',
                'privacyx': privacyx,
                'appid': appid,
                'sid': sid,
                'm': 'self',
                'xc_message': content,
                'view_post': 'Chia sẻ',
                'shared_from_post_id': shared_from_post_id
            };
            const dataReact = await this.Request('post', UrlPost, headers, data);
            const now = new Date();
            const formattedTime = now.toTimeString().split(' ')[0];
            if (dataReact !== false) {
                return `${formattedTime} | Bạn đã SHARE POST | ${IdPost} | ${content} `;
            }
            else {
                return `${formattedTime} | Không tìm thấy nút SHARE | ${IdPost}`;
            }
        }
        catch (error) {
            return false;
        }
    }
    async FollowUser(IdPost) {
        try {
            const cookieString = "c_user=100094320435884;xs=2:mmeEgQwO5YYlGA:2:1700065635:-1:-1;fr=0k6f2QTuOtTmH4Y5f.AWVtkwPwn98GkzAPeVaEo5etGqI.BlVPFj.hI.AAA.0.0.BlVPFj.AWVyrRTu7TQ;datr=WvFUZRLDHFBD_b87_HxeZQu9;";
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
            const url = `https://mbasic.facebook.com/${IdPost}`;
            const method = "get";
            const Home = await this.Request(method, url, headers);
            const FollowNode = `https://mbasic.facebook.com/a/subscribe.php?${Home.split('/a/subscribe.php?')[1].split('"')[0].replace("amp;", "")}`;
            const Follow = await this.Request('get', FollowNode, headers);
            const now = new Date();
            const formattedTime = now.toTimeString().split(' ')[0];
            if (Follow !== false) {
                return `${formattedTime} | Bạn đã FOLLOW POST | ${IdPost}`;
            }
            else {
                return `${formattedTime} | Không tìm thấy nút FOLLOW | ${IdPost}`;
            }
        }
        catch (error) {
            return false;
        }
    }
};
exports.FacebookService = FacebookService;
exports.FacebookService = FacebookService = __decorate([
    (0, common_1.Injectable)()
], FacebookService);
//# sourceMappingURL=facebook.service.js.map