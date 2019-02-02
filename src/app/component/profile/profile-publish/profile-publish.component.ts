import { Component, OnInit } from '@angular/core';

import { UtilityService } from '../../../service/utility/utility.service';
import { ErrorService } from '../../../service/utility/error.service';
import { ProfileService } from '../../../service/profile/profile.service';

import { environment as env } from '../../../../environments/environment';
import * as superagent from 'superagent';

@Component({
  selector: 'app-profile-publish',
  templateUrl: './profile-publish.component.html',
  styleUrls: ['./profile-publish.component.scss']
})
export class ProfilePublishComponent implements OnInit {

  constructor(public profile: ProfileService, public utility: UtilityService, public error: ErrorService) { }

  ngOnInit() { }

  public async publish() {
    const published = this.profile.form['published'] ? false : true;

    try {
      const result = await superagent.patch(`${env.api}/profile/publish`)
                                .send({ profileId: this.profile.profileId, published })
                                .withCredentials();

      this.profile.form['published'] = published;
      this.profile.data['published'] = published;
    } catch (error) {
      this.error.autoHandleError(error);
    }
  }

}
