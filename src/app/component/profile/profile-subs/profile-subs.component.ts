import { Component, OnInit, ApplicationRef } from '@angular/core';

import { UtilityService } from '../../../service/utility/utility.service';
import { ErrorService } from '../../../service/utility/error.service';
import { ProfileService } from '../../../service/profile/profile.service';

import { environment as env } from '../../../../environments/environment';
import * as superagent from 'superagent';

@Component({
  selector: 'app-profile-subs',
  templateUrl: './profile-subs.component.html',
  styleUrls: ['./profile-subs.component.scss']
})
export class ProfileSubsComponent implements OnInit {

  constructor(public profile: ProfileService, public utility: UtilityService, public error: ErrorService, private ref: ApplicationRef) { }

  ngOnInit() { }

  public addTime(sub, time: number) {
    if (time === 0) {
      sub.dateExpiry = Number(new Date());
    } else if (sub.dateExpiry && sub.dateExpiry  > 0) {
      sub.dateExpiry += time;
    } else {
      sub.dateExpiry  = time;
    }

    this.ref.tick();
  }

  public async revokeSubscription(sub) {
    try {
      await superagent.patch(`${env.api}/subscription/${sub._id}/revoke`).withCredentials();
      sub.state = 'revoked';
    } catch (error) {
      this.error.autoHandleError(error);
    }
  }

  public async reinstateSubscription(sub) {
    try {
      await superagent.patch(`${env.api}/subscription/${sub._id}/reinstate`).withCredentials();
      sub.state = 'active';
    } catch (error) {
      this.error.autoHandleError(error);
    }
  }

  public async updateSubscriptionExpiry(sub) {
    try {
      const result = await superagent.post(`${env.api}/subscription/${sub._id}/expiry`)
                            .send({ dateExpiry: sub.dateExpiry })
                            .withCredentials();

      sub.expiryMessageState = true;
      sub.expiryMessage = result.body.message;

      setTimeout(() => {
        sub.expiryMessageState = false;
      }, 2500);
    } catch (error) {
      this.error.autoHandleError(error);
    }
  }

  public async getShipping(sub) {
    if (sub.shipping) { return; }
    const userId = sub.user._id;

    try {
      const result = await superagent.get(`${env.api}/subscriber/shipping/${userId}`)
                                .withCredentials();

      sub.shipping = result.body.response;
    } catch (error) {
      this.error.autoHandleError(error);
    }
  }

  public getShippingKey(sub, key: string) {
    if (sub.shipping) {
      return sub.shipping[key] || '~';
    } else {
      return '~';
    }
  }

}
