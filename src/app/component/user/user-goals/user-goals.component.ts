import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../service/user/user.service';

@Component({
  selector: 'app-user-goals',
  templateUrl: './user-goals.component.html',
  styleUrls: ['./user-goals.component.scss']
})
export class UserGoalsComponent implements OnInit {

  constructor(public user: UserService) { }

  ngOnInit() { }

  public countCurrencyGoal(currency: string) {
    let amount = 0;

    this.user.tiers.forEach(tier => {
      if (tier.currency.toLowerCase() === currency.toLowerCase()) {
        const baseAmount = tier.amount;
        amount += (baseAmount * tier.subscriber.length);
      }
    });

    return amount;
  }

  public countSubscribers() {
    let amount = 0;

    this.user.tiers.forEach(tier => {
      amount += tier.subscriber.length;
    });

    return amount;
  }

}
