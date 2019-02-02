import { Component, OnInit } from '@angular/core';

import { UtilityService } from '../../../service/utility/utility.service';
import { ErrorService } from '../../../service/utility/error.service';
import { ProfileService } from '../../../service/profile/profile.service';

import { environment as env } from '../../../../environments/environment';
import * as superagent from 'superagent';

@Component({
  selector: 'app-profile-meta',
  templateUrl: './profile-meta.component.html',
  styleUrls: ['./profile-meta.component.scss']
})
export class ProfileMetaComponent implements OnInit {

  constructor(public profile: ProfileService, public utility: UtilityService, public error: ErrorService) { }

  ngOnInit() { }

  public updateMeta() {
    this.updateProfileMeta(
      this.profile.form.nsfw,
      this.profile.form.censored,
    );
  }

  public async updateProfileMeta(nsfw: boolean, censored: boolean) {
    try {
      const result = await superagent.patch(`${env.api}/profile/meta`)
                                .send({ profileId: this.profile.profileId, nsfw, censored })
                                .withCredentials();

      this.profile.data.nsfw = nsfw;
      this.profile.data.censored = censored;
    } catch (error) {
      this.error.autoHandleError(error);
    }
  }

}
