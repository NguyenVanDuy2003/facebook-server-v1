import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class TdsService {
  public tds_token_Job: string = 'TDS9JSOyVmdlNnI6IiclZXZzJCLiMDMi9ma0V2ZuFmd5VHZiojIyV2c1Jye';
  public tds_token: string = 'TDSQfigjclZXZzJiOiIXZ2V2ciwiIzIzM5VHZ5VHZ5VHZiojIyV2c1Jye';

    async getMissions() {
      var config = {
        method: 'get',
        url: `https://traodoisub.com/api/?fields=reaction&access_token=${this.tds_token_Job}`,
        headers: {},
      };
      const response = await axios(config);
        console.log(response.data)
        return response.data;
      }


      async receiveCoins (type: string, id_job: string)  {
        var config = {
          method: 'get',
          url: `https://traodoisub.com/api/coin/?type=${type}&id=${id_job}&access_token=${this.tds_token}`,
          headers: {},
        };
        const response = await axios(config);
        console.log(response.data)
        return response.data;
      }
}
