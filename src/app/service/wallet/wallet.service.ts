import { Injectable } from '@angular/core';

import { environment as env } from '../../../environments/environment';
import * as superagent from 'superagent';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  public wallets = {
    'btc': {
      type: 'btc',
      address: 'N/A',
      balance: '0.0',
    },
    'eth': {
      type: 'eth',
      address: 'N/A',
      balance: '0.0',
    },
    'xmr': {
      type: 'xmr',
      address: 'N/A',
      balance: '0.0',
    },
  };

  constructor() {
    this.getEth();
  }

  public getEth() {
    superagent.get(`${env.api}/wallet/eth`)
    .withCredentials()
    .then(result => {
      console.log('result', result.body);
      this.wallets['eth'] = result.body.response;
    })
    .catch(error => {
      console.log('error', error.response.body);
    });
  }

}
