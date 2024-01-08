import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class TdsService {
    async getHello() {
        var config = {
          method: 'get',
          url: 'https://traodoisub.com/api/?fields=reaction&access_token=TDSQfigjclZXZzJiOiIXZ2V2ciwiIzIzM5VHZ5VHZ5VHZiojIyV2c1Jye',
          headers: {},
        };
        const response = await axios(config);
        console.log(response.data)
        return response.data;
      }
}
