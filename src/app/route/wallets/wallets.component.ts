import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../service/utility/session.service';
import { WalletService } from '../../service/wallet/wallet.service';

@Component({
  selector: 'app-wallets',
  templateUrl: './wallets.component.html',
  styleUrls: ['./wallets.component.scss']
})
export class WalletsComponent implements OnInit {

  constructor(public session: SessionService, public wallet: WalletService) { }

  ngOnInit() {
    this.session.restrictedAccess();
  }

}
