import { Component, OnInit } from '@angular/core';

import { UtilityService } from '../../../service/utility/utility.service';
import { ErrorService } from '../../../service/utility/error.service';
import { UserService } from '../../../service/user/user.service';
import { WalletService } from '../../../service/wallet/wallet.service';
import { MetamaskService } from '../../../service/wallet/metamask.service';
import { SessionService } from '../../../service/utility/session.service';

import { environment as env } from '../../../../environments/environment';
import * as superagent from 'superagent';

@Component({
  selector: 'app-user-tiers',
  templateUrl: './user-tiers.component.html',
  styleUrls: ['./user-tiers.component.scss']
})
export class UserTiersComponent implements OnInit {

  public loading = false;
  public activeTier = 0;
  public confirmation = false;
  public subscribed = false;
  public subscribeError = false;

  constructor(
    public user: UserService,
    public wallet: WalletService,
    public metamask: MetamaskService,
    public session: SessionService,
    public error: ErrorService,
    public utility: UtilityService,
  ) { }

  ngOnInit() {
    this.resizeTextarea();
  }

  public switchTier(i) {
    this.loading = true;
    setTimeout(() => {
      this.activeTier = i;
      this.resizeTextarea();
      setTimeout(() => {
        this.loading = false;
      }, 250);
    }, 250);
  }

  public resizeTextarea() {
    setTimeout(() => {
      const tes: any = document.querySelectorAll('textarea.td-te');
      tes.forEach(te => {
        te.style.height = '24px';
        te.style.height = te.scrollHeight + 12 + 'px';
      });
    }, 250);
  }

  public getWallet(currency: string) {
    return this.wallet.wallets[currency.toLowerCase()]['address'];
  }

  public getWalletBalance(currency: string) {
    return this.wallet.wallets[currency.toLowerCase()]['balance'];
  }

  public checkSubscription(subscribers) {
    let state = false;

    subscribers.forEach(subscriber => {
      if (subscriber.user._id === this.session.state._id) {
        state = true;
      }
    });

    return state;
  }

  public async confirmSubscription(tier) {
    try {
      const result = await superagent.post(`${env.api}/subscribe`)
                                .send({ tierId: tier._id })
                                .withCredentials();

      if (result.body.response.transaction.error) {
        this.emitError();
      } else {
        console.log('result', result.body);
        this.confirmation = false;
        this.subscribed = true;
      }
    } catch (error) {
      if (!error.response) {
        this.error.autoHandleError(error);
      } else {
        this.emitError();
      }
    }
  }

  public refreshPage() {
    window.location.reload();
  }

  public emitError() {
    this.subscribeError = true;
    setTimeout(() => {
      this.subscribeError = false;
      this.confirmation = false;
    }, 2500);
  }

}
