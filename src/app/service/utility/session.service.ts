import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ErrorService } from './error.service';

import { environment as env } from '../../../environments/environment';
import * as superagent from 'superagent';

export interface Session {
  active: boolean;
  _id: string;
  email: string;
  username: string;
  photoUrl: string;
  emailConfirmed: boolean;
  twofa: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  public state: Session = {
    active: false,
    _id: '',
    email: '',
    username: '',
    photoUrl: '',
    emailConfirmed: false,
    twofa: false,
  };

  public email = '';
  public username = '';

  constructor(private router: Router, private arouter: ActivatedRoute, private error: ErrorService) {
    this.update();
  }

  public update(): Promise<boolean> {
    return new Promise(async resolve => {
      try {
        const result = await superagent.get(`${env.api}/session`)
                                    .withCredentials();

        this.state.active = result.body.active;
        this.state._id = result.body.user._id;
        this.state.email = result.body.user.email;
        this.state.username = result.body.user.username;
        this.state.photoUrl = result.body.user.photoUrl;
        this.state.emailConfirmed = result.body.user.emailConfirmed;
        this.state.twofa = result.body.user.twofa;

        this.email = result.body.user.email;
        this.username = result.body.user.username;

        resolve(this.state.active);
      } catch (error) {
        this.error.autoHandleError(error);
        resolve(false);
      }
    });
  }

  public getPhoto() {
    if (this.state.photoUrl) {
      return `${env.api}/${this.state.photoUrl}`;
    } else {
      return `/assets/img/lambda.png`;
    }
  }

  public async logout() {
    try {
      await superagent.get(`${env.api}/logout`)
                    .withCredentials();

      this.state = {
        active: false,
        _id: '',
        email: '',
        username: '',
        photoUrl: '',
        emailConfirmed: false,
        twofa: false,
      };
      this.update();
      this.router.navigateByUrl('/');
    } catch (error) {
      this.error.autoHandleError(error);
    }
  }

  public restrictedAccess() {
    this.update().then(active => {
      if (active !== true) {
        this.router.navigateByUrl('/login');
      }
    });
  }

}
