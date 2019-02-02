import { Component, OnInit } from '@angular/core';
import { environment as env } from '../../../../environments/environment';

@Component({
  selector: 'app-disclaimer',
  templateUrl: './disclaimer.component.html',
  styleUrls: ['./disclaimer.component.scss']
})
export class DisclaimerComponent implements OnInit {

  public visible = !env.production;

  public notices = [
    'This is the beta site. All currency is TESTNET currency and NOT REAL cryptocurrency.',
    'Currently Bitcoin and Monero Testnet Functionality is NOT live. Please review the roadmap.',
    'The Ethereum Test Network is ROPSTEN, please go to: https://faucet.ropsten.be/ to get Ethereum.',
    'If you have questions or need help, email hello@chriscates.ca'
  ];

  constructor() { }

  ngOnInit() {
    if (window.localStorage.getItem('disclaimer') === 'b2') {
      this.visible = false;
    }
  }

  public dontShow() {
    window.localStorage.setItem('disclaimer', 'b2');
    this.visible = false;
  }

}
