import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../service/utility/session.service';

import { environment as env } from '../../../../environments/environment';
import * as superagent from 'superagent';

@Component({
  selector: 'app-settings-twofa',
  templateUrl: './twofa.component.html',
  styleUrls: ['./twofa.component.scss']
})
export class TwofaComponent implements OnInit {

  public emailOverlay = false;
  public emailCode: string;
  public emailErrorMessage = '';
  public emailError = false;
  public emailLog = true;

  public twofaOverlay1 = false;
  public twofaOverlay2 = false;
  public twofaOverlay3 = false;

  public twofaCode = '';
  public twofaUri = 'nouri';

  public codeInput: number;
  public codeInputUpdate: number;

  constructor(public session: SessionService) { }

  ngOnInit() { }

  public showEmailOverlay() {
    if (!this.session.state.emailConfirmed) {
      this.emailOverlay = true;
    }
  }

  public regenerateEmailCode() {
    superagent.post(`${env.api}/user/email/verify/emailCode`).withCredentials()
    .then(result => {
      this.emitLog('Email Code updated, check your email');
    })
    .catch(error => {
      this.emitLog('Something went wrong', false);
    });
  }

  public verifyEmailCode() {
    superagent.post(`${env.api}/user/email/verify`)
    .send({ emailCode: this.emailCode })
    .withCredentials()
    .then(result => {
      this.session.state.emailConfirmed = true;
      this.emailCode = '';
      this.emailOverlay = false;
    })
    .catch(error => {
      this.emitLog('Incorrect email code...', false);
    });
  }

  public emitLog(message = '', emailLog = true) {
    this.emailErrorMessage = message;
    this.emailLog = emailLog;
    this.emailError = true;
    setTimeout(() => {
      this.emailError = false;
    }, 2500);
  }

  public generateCode() {
    superagent.post(`${env.api}/user/2fa`)
    .send({ token: this.codeInputUpdate || 0 })
    .withCredentials()
    .then(result => {
      console.log('result', result.body);
      this.twofaCode = result.body.response.code;
      this.twofaUri = result.body.response.uri;
      this.session.state.twofa = false;
      this.twofaOverlay2 = false;
      this.twofaOverlay3 = false;
      this.twofaOverlay1 = true;
    })
    .catch(error => {
      console.log('error', error.response.body);
      if (error.response.body.code === 403) {
        this.twofaOverlay3 = true;
      }
    });
  }

  public confirmCode() {
    superagent.post(`${env.api}/user/2fa/validate`)
    .send({ token: this.codeInput })
    .withCredentials()
    .then(result => {
      console.log('result', result.body);
      this.session.state.twofa = true;
      this.twofaOverlay2 = false;
      this.twofaOverlay3 = false;
    })
    .catch(error => {
      console.log('error', error.response.body);
    });
  }

}
