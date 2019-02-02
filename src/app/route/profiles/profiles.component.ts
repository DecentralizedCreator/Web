import { Component, OnInit } from '@angular/core';

import { SessionService } from '../../service/utility/session.service';
import { UtilityService } from '../../service/utility/utility.service';

import { ProfilesService } from '../../service/profile/profiles.service';

import { environment as env } from '../../../environments/environment';
import * as superagent from 'superagent';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent implements OnInit {

  constructor(public session: SessionService, public utility: UtilityService, public profiles: ProfilesService) { }

  ngOnInit() {
    this.session.restrictedAccess();
    this.profiles.getProfiles();
  }

}
