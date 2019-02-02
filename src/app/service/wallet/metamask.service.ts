import { Injectable } from '@angular/core';
import { environment as env } from '../../../environments/environment';
import * as superagent from 'superagent';

import { abi } from './abi.eth';

declare const window: any, Web3: any, ethereum: any;

@Injectable({
  providedIn: 'root'
})
export class MetamaskService {

  public serverNetwork = env.ethnetwork;

  public hasMetamask = false;
  public enabled = false;

  public networkId = '0';
  public network = 'local';
  public address = 'N/A';
  public balance = '0.0';

  public contractNetworkId = '-1';
  public contractAddress = '0x';
  public contract;

  constructor() {
    this.contractInfo();
  }

  public async init() {
    if (window.ethereum) {
      this.hasMetamask = true;
      if (window.ethereum._metamask.isEnabled()) {
        await window.ethereum.enable();
        this.enabled = true;
        this.getInfo();
        this.networkId = window.ethereum.networkVersion;
        this.getNetwork();
      }
    }
  }

  public async contractInfo() {
    try {
      const result = await superagent.get(`${env.api}/crypto`);
      this.contractAddress = result.body.ethAddress;
      this.contractNetworkId = result.body.ethNetwork;
      this.contract = window.web3.eth.contract(abi).at(this.contractAddress);
      window.web3 = new Web3(ethereum);
    } catch (error) {
      console.log('error', error);
    }
  }

  public async enableMetamask() {
    if (window.ethereum) {
      window.web3 = new window.Web3(window.ethereum);
      try {
        await window.ethereum.enable();
        this.enabled = true;
        this.getInfo();
        this.networkId = window.ethereum.networkVersion;
        this.getNetwork();
      } catch (error) {
        console.log(error);
        this.enabled = false;
      }
    }
  }

  public getInfo() {
    this.address = window.web3.eth.accounts[0];

    window.web3.eth.getBalance(this.address, (err, balance) => {
      this.balance = window.web3.fromWei(balance).toString();
    });
  }

  public getBlockExplorerUrl() {
    return `${env.etherscan}/address/${this.address}`;
  }

  public getNetwork() {
    if (this.networkId === '3') {
      this.network = 'Ropsten';
    } else if (this.networkId === '1') {
      this.network = 'Main Net';
    } else {
      this.network = 'Local';
    }
  }

  public async getTierWallet(tierId) {
    try {
      const result = await superagent.get(`${env.api}/profile/wallet/${tierId}`);
      return result.body.response.address;
    } catch (error) {
      console.log('error', error);
    }
  }

  public async subscribe(tier) {
    console.log('tier', tier);
    console.log('contract', this.contract);
    try {
      await superagent.post(`${env.api}/subscribe/metamask/check`).send({ tierId: tier._id }).withCredentials();
      const userAddress = await window.ethereum.enable();
      this.address = userAddress[0];

      const tierAddress = await this.getTierWallet(tier._id);
      console.log('T Address', tierAddress);
      console.log('U Address', this.address);

      this.contract.NewSubscription(
        tierAddress,
        String(tier.user),
        String(tier.title),
        {
          from: this.address,
          value: window.web3.toWei(String(tier.amount + 0.05)),
        },
        async (error, tx) => {
          if (error) {
            console.log('error', error);
          } else {
            console.log('txid', tx);
            await superagent.post(`${env.api}/subscribe/metamask`).send({ tierId: tier._id, transaction: tx }).withCredentials();
            alert('Subscription successful!~');
            window.location.reload();
          }
        }
      );
    } catch (error) {
      console.log('error', error);
    }
  }

}
