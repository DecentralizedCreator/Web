import { Injectable } from '@angular/core';
import { environment as env } from '../../../environments/environment';

import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }

  public getImage(url: string): string {
    if (!url) {
      return '/assets/img/lambda.png';
    } else {
      return `${env.api}/${url}`;
    }
  }

  public getETA(time: number): string {
    if (time && time > 0) {
      const diff = moment(Number(new Date()) + time);
      if (time < 86400000) {
        return moment(diff).diff(moment(), 'hours') + ' hours';
      } else {
        return moment(diff).diff(moment(), 'days') + ' days';
      }
    } else {
      return 'forever <3';
    }
  }

  public convertTimestamp(time: number): string {
    if (time === 0) {
      return 'lasts forever <3';
    } else {
      return moment(time).fromNow();
    }
  }

}
