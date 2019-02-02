import { Injectable } from '@angular/core';

import { ErrorService } from '../utility/error.service';
import { SessionService } from '../utility/session.service';

import { environment as env } from '../../../environments/environment';
import * as superagent from 'superagent';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private emailTimeout;
  private usernameTimeout;
  private passwordTimeout;

  public emailCheck = {
    state: 0,
    message: ''
  };

  public usernameCheck = {
    state: 0,
    message: ''
  };

  public password = {
    state: 0,
    message: '',
    oldpassword: '',
    password1: '',
    password2: ''
  };

  constructor(private session: SessionService, private error: ErrorService) { }

  public checkEmail(email) {
    this.emailCheck.state = 0;
    clearTimeout(this.emailTimeout);

    this.emailTimeout = setTimeout(async () => {
      try {
        const result = await superagent.post(`${env.api}/check/email`)
                                .send({ email })
                                .withCredentials();

        this.emailCheck.state = 1;
        this.emailCheck.message = result.body.message;
      } catch (error) {
        if (!error.response) {
          this.error.autoHandleError(error);
        } else {
          this.emailCheck.state = -1;
          this.emailCheck.message = error.response.body.message;
        }
      }
    }, 1500);
  }

  public async updateEmail(email) {
    this.emailCheck.state = 0;
    clearTimeout(this.emailTimeout);

    try {
      const result = await superagent.patch(`${env.api}/user/email`)
                              .send({ email })
                              .withCredentials();

      this.emailCheck.state = 1;
      this.emailCheck.message = result.body.message;
      setTimeout(() => {
        this.session.update();
      }, 1500);
    } catch (error) {
      if (!error.response) {
        this.error.autoHandleError(error);
      } else {
        this.emailCheck.state = -1;
        this.emailCheck.message = error.response.body.message;
      }
    }
  }

  public checkUsername(username) {
    this.usernameCheck.state = 0;
    clearTimeout(this.usernameTimeout);

    this.usernameTimeout = setTimeout(async () => {
      try {
        const result = superagent.post(`${env.api}/check/username`)
                            .send({ username })
                            .withCredentials();

        this.usernameCheck.state = 1;
        this.usernameCheck.message = result.body.message;
      } catch (error) {
        if (!error.response) {
          this.error.autoHandleError(error);
        } else {
          this.usernameCheck.state = -1;
          this.usernameCheck.message = error.response.body.message;
        }
      }
    }, 1500);
  }

  public async updateUsername(username) {
    this.usernameCheck.state = 0;
    clearTimeout(this.usernameTimeout);

    try {
      const result = await superagent.patch(`${env.api}/user/username`)
                                .send({ username })
                                .withCredentials();

      this.usernameCheck.state = 1;
      this.usernameCheck.message = result.body.message;
      setTimeout(() => {
        this.session.update();
      }, 1500);
    } catch (error) {
      if (!error.response) {
        this.error.autoHandleError(error);
      } else {
        this.usernameCheck.state = -1;
        this.usernameCheck.message = error.response.body.message;
      }
    }
  }

  public async updatePassword() {
    this.password.state = 0;

    try {
      const result = await superagent.patch(`${env.api}/user/password`)
                                .send({
                                  oldpassword: this.password.oldpassword,
                                  password1: this.password.password1,
                                  password2: this.password.password2,
                                })
                                .withCredentials();

      this.password.state = 1;
      this.password.message = result.body.message;
      clearTimeout(this.passwordTimeout);
      this.passwordTimeout = setTimeout(() => {
        this.password.state = 0;
      }, 3500);
    } catch (error) {
      if (!error.response) {
        this.error.autoHandleError(error);
      } else {
        this.password.state = -1;
        this.password.message = error.response.body.message;
        clearTimeout(this.passwordTimeout);
        this.passwordTimeout = setTimeout(() => {
          this.password.state = 0;
        }, 3500);
      }
    }
  }

}
