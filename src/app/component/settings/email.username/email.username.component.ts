import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../service/utility/session.service';
import { SettingsService } from '../../../service/settings/settings.service';

import { environment as env } from '../../../../environments/environment';
import * as superagent from 'superagent';

@Component({
  selector: 'app-settings-email-username',
  templateUrl: './email.username.component.html',
  styleUrls: ['./email.username.component.scss']
})
export class EmailUsernameComponent implements OnInit {

  constructor(public settings: SettingsService, public session: SessionService) { }

  ngOnInit() {
    const el: any = document.querySelector('#user-photo-input');
    el.onchange = () => {
      const file = el.files[0];

      superagent.post(`${env.api}/user/photo`)
      .attach('photo', file)
      .withCredentials()
      .then(result => {
        console.log('result', result.body);
        this.session.state.photoUrl = result.body.response.path;
      })
      .catch(error => {
        console.log('error', error.response.body);
      });
    };
  }

  public clickEvent() {
    const el: any = document.querySelector('#user-photo-input');
    el.click();
  }

}
