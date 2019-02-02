import { Component, OnInit } from '@angular/core';

import { UtilityService } from '../../../service/utility/utility.service';
import { ErrorService } from '../../../service/utility/error.service';
import { ProfileService } from '../../../service/profile/profile.service';

import { environment as env } from '../../../../environments/environment';
import * as superagent from 'superagent';

@Component({
  selector: 'app-profile-description',
  templateUrl: './profile-description.component.html',
  styleUrls: ['./profile-description.component.scss']
})
export class ProfileDescriptionComponent implements OnInit {

  private messageTimeout;

  public message = '';
  public messageState = 0;

  public counter = 0;

  constructor(public profile: ProfileService, public utility: UtilityService, public error: ErrorService) { }

  ngOnInit() {
    setTimeout(() => {
      this.resizeTextarea();
      this.updateCounter();
    }, 250);
  }

  public updateCounter() {
    this.counter = this.profile.form.description.length;
  }

  public async updateDescription(description) {
    if (this.profile.data.description !== description) {

      try {
        const result = await superagent.patch(`${env.api}/profile/description`)
                                  .send({ profileId: this.profile.profileId, description })
                                  .withCredentials();

        this.profile.data.description = description;
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

  public resizeTextarea() {
    const te: any = document.querySelector('textarea.pd-te');
    te.style.height = '24px';
    te.style.height = te.scrollHeight + 12 + 'px';
  }

}
