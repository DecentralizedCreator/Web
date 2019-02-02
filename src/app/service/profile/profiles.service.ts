import { Injectable } from '@angular/core';

import { ErrorService } from '../utility/error.service';

import { environment as env } from '../../../environments/environment';
import * as superagent from 'superagent';

@Injectable({
  providedIn: 'root'
})
export class ProfilesService {

  public loading = false;

  public message = '';
  public messageState = false;

  public list = [];

  constructor(private error: ErrorService) { }

  public async getProfiles() {
    this.loading = true;

    try {
      const result = await superagent.get(`${env.api}/profile/list`).withCredentials();
      this.list = result.body.response;
    } catch (error) {
      this.error.autoHandleError(error);
    }

    this.loading = false;
  }

  public async createProfile() {
    this.loading = true;

    try {
      await superagent.post(`${env.api}/profile/new`).withCredentials();
      await this.getProfiles();
    } catch (error) {
      this.error.autoHandleError(error);
    }

    this.loading = false;
  }

  public async deleteProfile(id) {
    this.loading = true;

    try {
      await superagent.delete(`${env.api}/profile/delete/${id}`).withCredentials();
      await this.getProfiles();
    } catch (error) {
      this.error.autoHandleError(error);
    }

    this.loading = false;
  }

  public emitMessage(message: string) {
    this.messageState = true;
    this.message = message;
    setTimeout(() => {
      this.messageState = false;
    }, 2500);
  }

}
