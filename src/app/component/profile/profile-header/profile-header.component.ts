import { Component, OnInit } from '@angular/core';

import { UtilityService } from '../../../service/utility/utility.service';
import { ErrorService } from '../../../service/utility/error.service';
import { ProfileService } from '../../../service/profile/profile.service';

import { environment as env } from '../../../../environments/environment';
import * as superagent from 'superagent';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.scss']
})
export class ProfileHeaderComponent implements OnInit {

  public photoLoading = false;
  public inputLoading = true;

  private timeout;
  public errors = [];

  constructor(public profile: ProfileService, public utility: UtilityService, public error: ErrorService) { }

  ngOnInit() {
    const el: any = document.querySelector('#photo-input');

    el.onchange = async () => {
      this.photoLoading = true;
      const file = el.files[0];

      try {
        const result = await superagent.post(`${env.api}/profile/${this.profile.profileId}/photo`)
                              .attach('photo', file)
                              .withCredentials();

        this.profile.form.photoUrl = result.body.response.path;
        this.profile.data.photoUrl = result.body.response.path;
      } catch (error) {
        this.error.autoHandleError(error);
      }

      this.photoLoading = false;
    };
  }

  public photoImage() {
    return `${env.api}/${this.profile.data.photoUrl}`;
  }

  public clickEvent() {
    const el: any = document.querySelector('#photo-input');
    el.click();
  }

  public update(name: string, tagline: string) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.updateProfileHeader(name, tagline);
    }, 2000);
  }

  public async updateProfileHeader(name: string, tagline: string) {
    if (this.profile.data.name !== name || this.profile.data.tagline !== tagline) {
      this.inputLoading = true;
      try {
        await superagent.patch(`${env.api}/profile/heading`)
                        .send({ profileId: this.profile.profileId, name, tagline })
                        .withCredentials();

        this.profile.data.name = name;
        this.profile.data.tagline = tagline;
        this.errors = [];
      } catch (error) {
        if (!error.response) {
          this.error.autoHandleError(error);
        } else {
          this.errors = error.response.body.errors;
        }
      }
      this.inputLoading = false;
    }
  }

  public getErrorKey(key: string) {
    let message = '';
    this.errors.forEach(error => {
      if (key === error['key']) { message = error.message; }
    });
    return message;
  }

}
