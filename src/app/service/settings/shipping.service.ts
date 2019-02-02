import { Injectable } from '@angular/core';

import { ErrorService } from '../utility/error.service';

import { environment as env } from '../../../environments/environment';
import * as superagent from 'superagent';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {

  public form = {
    firstName: '',
    lastName: '',
    country: '',
    postalCode: '',
    address1: '',
    address2: '',
    city: '',
    region: '',
  };

  public data;

  public errors = [];
  public messageState = 0;
  public message = '';

  private messageTimeout;

  constructor(private error: ErrorService) {
    this.getShipping();
  }

  public async getShipping() {
    try {
      const result = await superagent.get(`${env.api}/user/shipping`)
                                  .withCredentials();

      this.data = result.body.response;
      this.form = {
        firstName: this.data.firstName,
        lastName: this.data.lastName,
        country: this.data.country,
        postalCode: this.data.postalCode,
        address1: this.data.address1,
        address2: this.data.address2,
        city: this.data.city,
        region: this.data.region,
      };
    } catch (error) {
      this.error.autoHandleError(error);
    }
  }

  public async updateShipping() {
    this.errors = [];

    try {
      const result = await superagent.post(`${env.api}/user/shipping`)
                                  .send(this.form)
                                  .withCredentials();

      this.message = result.body.message;
      this.messageState = 1;
      this.timeoutMessage();
    } catch (error) {
      if (!error.response) {
        this.error.autoHandleError(error);
      } else {
        this.errors = error.response.body.errors;
        this.message = error.response.body.message;
        this.messageState = -1;
        this.timeoutMessage();
      }
    }
  }

  public returnErrorKey(key) {
    let message = '';
    this.errors.forEach(error => {
      if (error.key === key) {
        message = error.message;
      }
    });

    return message;
  }

  public timeoutMessage() {
    clearTimeout(this.messageTimeout);
    this.messageTimeout = setTimeout(() => {
      this.messageState = 0;
    }, 2500);
  }

}
