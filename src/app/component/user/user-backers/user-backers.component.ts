import { Component, OnInit } from '@angular/core';

import { UtilityService } from '../../../service/utility/utility.service';
import { UserService } from '../../../service/user/user.service';
import { WalletService } from '../../../service/wallet/wallet.service';

@Component({
  selector: 'app-user-backers',
  templateUrl: './user-backers.component.html',
  styleUrls: ['./user-backers.component.scss']
})
export class UserBackersComponent implements OnInit {

  constructor(public user: UserService, public wallet: WalletService, public utility: UtilityService) { }

  ngOnInit() { }

}
