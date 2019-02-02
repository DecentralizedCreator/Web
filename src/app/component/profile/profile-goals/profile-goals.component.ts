import { Component, OnInit } from '@angular/core';

import { UtilityService } from '../../../service/utility/utility.service';
import { ErrorService } from '../../../service/utility/error.service';
import { ProfileService } from '../../../service/profile/profile.service';

import { environment as env } from '../../../../environments/environment';
import * as superagent from 'superagent';

@Component({
  selector: 'app-profile-goals',
  templateUrl: './profile-goals.component.html',
  styleUrls: ['./profile-goals.component.scss']
})
export class ProfileGoalsComponent implements OnInit {

  private timeout;
  private messageTimeout;

  public message = '';
  public messageState = 0;

  constructor(public profile: ProfileService, public utility: UtilityService, public error: ErrorService) { }

  ngOnInit() { }

  public updateGoals() {
    clearTimeout(this.timeout);

    const obj = {
      btcGoal: this.profile.form.btcGoal,
      ethGoal: this.profile.form.ethGoal,
      xmrGoal: this.profile.form.xmrGoal,
      subscriberGoal: this.profile.form.subscriberGoal,
    };

    this.timeout = setTimeout(() => {
      this.sendGoals(obj);
    }, 2000);
  }

  public async sendGoals(update: object) {
    try {
      const result = await superagent.patch(`${env.api}/profile/goals`)
                              .send({ profileId: this.profile.profileId, update })
                              .withCredentials();

      this.profile.data['btcGoal'] = this.profile.form.btcGoal;
      this.profile.data['ethGoal'] = this.profile.form.ethGoal;
      this.profile.data['xmrGoal'] = this.profile.form.xmrGoal;
      this.profile.data['subscriberGoal'] = this.profile.form.subscriberGoal;
      this.message = result.body.message;
      this.messageState = 1;
      this.emitMessage();
    } catch (error) {
      if (!error.response) {
        this.error.autoHandleError(error);
      } else {
        this.message = error.response.body.message;
        this.messageState = -1;
        this.emitMessage();
      }
    }
  }

  public emitMessage() {
    clearTimeout(this.messageTimeout);
    this.messageTimeout = setTimeout(() => {
      this.messageState = 0;
    }, 3500);
  }

}
