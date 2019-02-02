import { Component, OnInit, Input } from '@angular/core';

import { UtilityService } from '../../../service/utility/utility.service';
import { ErrorService } from '../../../service/utility/error.service';
import { WalletService } from '../../../service/wallet/wallet.service';

import { environment as env } from '../../../../environments/environment';
import * as superagent from 'superagent';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

  @Input() walletType: string;

  public inputs = {
    address: '',
    error: '',
    amount: '',
    amountError: '',
    dialog: false,
    complete: false,
  };

  public confirm = {
    address: '',
    amount: '',
    gasPrice: '0',
    gasCost: '0',
    error: null,
  };

  public confirmError = false;

  public transaction = {
    hash: ''
  };

  constructor(public wallet: WalletService, public utility: UtilityService, public error: ErrorService) { }

  ngOnInit() { }

  public getIcon() {
    if (this.walletType === 'btc') {
      return `fab fa-bitcoin`;
    } else if (this.walletType === 'eth') {
      return `fab fa-ethereum`;
    } else {
      return `fab fa-monero`;
    }
  }

  public getTransactionUrl() {
    if (this.walletType === 'btc') {
      return `${env.blockexplorer}/tx/${this.transaction['hash']}`;
    } else if (this.walletType === 'eth') {
      return `${env.etherscan}/tx/${this.transaction['hash']}`;
    } else {
      return `${env.moneroblocks}`;
    }
  }

  public getBlockExplorerUrl() {
    if (this.walletType === 'btc') {
      return `${env.blockexplorer}/address/${this.wallet.wallets[this.walletType]['address']}`;
    } else if (this.walletType === 'eth') {
      return `${env.etherscan}/address/${this.wallet.wallets[this.walletType]['address']}`;
    } else {
      return `${env.moneroblocks}`;
    }
  }

  public getBlockExplorerLabel() {
    if (this.walletType === 'btc') {
      return `View on Blockexplorer`;
    } else if (this.walletType === 'eth') {
      return `View on Etherscan`;
    } else {
      return `View on Moneroblocks`;
    }
  }

  public getAddress() {
    if (this.walletType) {
      return `${this.wallet.wallets[this.walletType]['address']}`;
    } else {
      return `N/A`;
    }
  }

  public getBalance() {
    if (this.walletType) {
      return `${this.wallet.wallets[this.walletType]['balance']}`;
    } else {
      return `0.0000`;
    }
  }

  public getInputAddress() { return this.inputs['address'] || 'N/A'; }

  public getError() { return this.inputs['error'] || ''; }

  public getAmountError() { return this.inputs['amountError'] || ''; }

  public getConfirmedAddress() { return this.confirm['address'] || 'N/A'; }

  public getTotal() {
    return (Number(this.confirm['amount']) + Number(this.confirm['gasCost'])).toFixed(4);
  }

  // Validate Functionality
  public validate() {
    if (this.walletType === 'btc') {
      this.validateBtc();
    } else if (this.walletType === 'eth') {
      this.validateEth();
    } else {
      this.validateXmr();
    }
  }

  public validateBtc() {

  }

  public async validateEth() {
    if (Number(this.inputs.amount) > 0 && Number(this.inputs.amount) < Number(this.getBalance()) - 0.1) {
      this.inputs.amountError = '';

      try {
        const result = await superagent.post(`${env.api}/wallet/eth/withdraw/validate`)
                                  .send({
                                    address: this.inputs['address'],
                                    amount: this.inputs['amount'],
                                  })
                                  .withCredentials();

        if (result.body.response.error) {
          this.inputs.error = result.body.response.error.reason;
        } else {
          this.inputs.error = '';
          this.inputs.dialog = true;
          this.confirm = result.body.response;
        }
      } catch (error) {
        this.error.autoHandleError(error);
      }
    } else {
      this.inputs.amountError = 'Please input a valid amount';
    }
  }

  public validateXmr() {

  }

  // Withdraw Functionality
  public withdraw() {
    if (this.walletType === 'btc') {
      this.withdrawBtc();
    } else if (this.walletType === 'eth') {
      this.withdrawEth();
    } else {
      this.withdrawXmr();
    }
  }

  public withdrawBtc() {

  }

  public async withdrawEth() {
    try {
      const result = await superagent.post(`${env.api}/wallet/eth/withdraw`)
      .send({
        address: this.confirm['address'],
        amount: this.confirm['amount']
      })
      .withCredentials();

      if (!result.body.response.error) {
        this.inputs.dialog = false;
        this.inputs.complete = true;
        this.transaction = result.body.response.receipt;
        this.wallet.getEth();
      } else {
        this.txError();
      }
    } catch (error) {
      this.error.autoHandleError(error);
    }
  }

  public withdrawXmr() {

  }

  public txError() {
    this.confirmError = true;
    setTimeout(() => {
      this.confirmError = false;
      this.inputs.dialog = false;
    }, 2500);
  }

}
