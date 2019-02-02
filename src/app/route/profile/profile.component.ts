import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProfileService } from '../../service/profile/profile.service';
import { SessionService } from '../../service/utility/session.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public activeTab = 'profile';

  constructor(private aroute: ActivatedRoute, public session: SessionService, public profile: ProfileService) { }

  ngOnInit() {
    this.session.restrictedAccess();
    this.aroute.params.subscribe((params: Params) => {
      this.profile.profileId = params['profileId'];
      this.profile.getProfile();
    });
  }

}
