import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../service/utility/session.service';

import * as moment from 'moment';
import { environment as env } from '../../../environments/environment';
import * as superagent from 'superagent';

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent implements OnInit {

  public subscriptions = [];

  constructor(public session: SessionService) { }

  ngOnInit() {
    this.session.restrictedAccess();
    this.getSubs();
  }

  public getSubs() {
    superagent.get(`${env.api}/subscriptions`)
    .withCredentials()
    .then(result => {
      console.log('result', result.body);
      this.subscriptions = result.body.response;
    })
    .catch(error => {
      console.log('error', error.response.body);
    });
  }

  public getImage(url: string) {
    if (url) {
      return `${env.api}/${url}`;
    } else {
      return '/assets/img/lambda.png';
    }
  }

  public convertTimestamp(time: number) {
    if (time === 0) {
      return 'lasts forever <3';
    } else {
      return moment(time).fromNow();
    }
  }

}
