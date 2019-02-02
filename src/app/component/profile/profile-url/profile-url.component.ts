import { Component, OnInit } from '@angular/core';

import { UtilityService } from '../../../service/utility/utility.service';
import { ErrorService } from '../../../service/utility/error.service';
import { ProfileService } from '../../../service/profile/profile.service';

import { environment as env } from '../../../../environments/environment';
import * as superagent from 'superagent';

@Component({
  selector: 'app-profile-url',
  templateUrl: './profile-url.component.html',
  styleUrls: ['./profile-url.component.scss']
})
export class ProfileUrlComponent implements OnInit {

  private timeout;
  private messageTimeout;

  public message = '';
  public messageState = 0;

  constructor(public profile: ProfileService, public utility: UtilityService, public error: ErrorService) { }

  ngOnInit() { }

  public update(url: string) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.updateProfileUrl(url);
    }, 2000);
  }

  public async updateProfileUrl(url: string) {
    if (this.profile.data.profileUrl !== url) {

      try {
        const result = await superagent.patch(`${env.api}/profile/url`)
                                .send({ profileId: this.profile.profileId, url })
                                .withCredentials();

        this.profile.data.profileUrl = url;
        this.message = result.body.message;
        this.messageState = 1;
        this.emitMessage();
      } catch (error) {
        if (!error.response) {
          this.error.autoHandleError(error);
        } else {
          this.message = error.response.body.errors[0]['message'];
          this.messageState = -1;
          this.emitMessage();
        }
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
