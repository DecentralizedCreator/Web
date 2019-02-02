import { Component, OnInit } from '@angular/core';

import { UtilityService } from '../../../service/utility/utility.service';
import { ErrorService } from '../../../service/utility/error.service';
import { ProfileService } from '../../../service/profile/profile.service';

import { environment as env } from '../../../../environments/environment';
import * as superagent from 'superagent';

@Component({
  selector: 'app-profile-banner',
  templateUrl: './profile-banner.component.html',
  styleUrls: ['./profile-banner.component.scss']
})
export class ProfileBannerComponent implements OnInit {

  public loading = false;

  constructor(public profile: ProfileService, public utility: UtilityService, public error: ErrorService) { }

  ngOnInit() {
    const el: any = document.querySelector('#banner-input');

    el.onchange = async () => {
      this.loading = true;
      const file = el.files[0];

      try {
        const result = await superagent
                              .post(`${env.api}/profile/${this.profile.profileId}/banner`)
                              .attach('banner', file).withCredentials();

        this.profile.form.bannerUrl = result.body.response.path;
        this.profile.data.bannerUrl = result.body.response.path;
      } catch (error) {
        this.error.autoHandleError(error);
      }

      this.loading = false;
    };
  }

  public bannerImage() {
    return this.utility.getImage(this.profile.data.bannerUrl);
  }

  public clickEvent() {
    const el: any = document.querySelector('#banner-input');
    el.click();
  }

}
