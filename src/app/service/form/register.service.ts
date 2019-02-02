import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { ErrorService } from '../utility/error.service';
import { SessionService } from '../utility/session.service';

import { environment as env } from '../../../environments/environment';
import * as superagent from 'superagent';

import { RegisterForm, LoginForm, RegisterState } from '../../interface/form';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  public loading = false;
  public registered = false;
  public activeTab = 'register';

  public registerForm: RegisterForm = {
    email: '',
    username: '',
    password1: '',
    password2: '',
  };

  public loginForm: LoginForm = {
    email: '',
    password: '',
    token: '',
  };

  public state: RegisterState = {
    active: false,
    color: '',
    message: '',
    errors: []
  };

  constructor(private router: Router, private session: SessionService, private error: ErrorService) { }

  public async register() {
    this.loading = true;

    try {
      const result = await superagent.post(`${env.api}/register`).send(this.registerForm).withCredentials();

      this.registerForm = {
        email: '',
        username: '',
        password1: '',
        password2: '',
      };

      await this.session.update();

      this.registered = true;
      this.router.navigateByUrl('/dashboard');
    } catch (error) {
      if (!error.response) {
        this.error.autoHandleError(error);
        this.emitState('red', 'API may be offline...', []);
      } else {
        const body = error.response.body;
        this.emitState('red', body.message, body.errors);
      }
    }

    this.loading = false;
  }

  public async login() {
    this.loading = true;

    try {
      const result = await superagent.post(`${env.api}/login`).send(this.loginForm).withCredentials();

      this.loginForm = {
        email: '',
        password: '',
        token: '',
      };

      await this.session.update();
      this.router.navigateByUrl('/dashboard');
    } catch (error) {
      if (!error.response) {
        this.error.autoHandleError(error);
        this.emitState('red', 'API may be offline...', []);
      } else {
        console.log('error', error.response.body);
        const body = error.response.body;
        this.emitState('red', body.message, body.errors);
      }
    }

    this.loading = false;
  }


  public returnErrorKey(key) {
    let message = '';
    this.state.errors.forEach(error => {
      if (error.key === key) {
        message = error.message;
      }
    });

    return message;
  }

  public emitState(color, message, errors) {
    this.state.active = true;
    this.state.color = color;
    this.state.message = message;
    this.state.errors = errors;

    setTimeout(() => {
      this.state.active = false;
    }, 3000);
  }

}
