import { Injectable } from '@angular/core';

import { ErrorService } from '../utility/error.service';

import { environment as env } from '../../../environments/environment';
import * as superagent from 'superagent';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  public timeout;

  public firstLoad = true;
  public error = false;
  public loading = false;
  public input = '';
  public page = 0;

  public nsfw = false;
  public censored = false;
  public category = '';

  public results = [];

  constructor(private e: ErrorService) { }

  public async query(chris: boolean = false) {
    this.loading = true;
    this.firstLoad = false;
    this.error = false;

    try {
      const result = await superagent.post(`${env.api}/search`)
                                .send({
                                  query: this.input,
                                  page: this.page,
                                  nsfw: this.nsfw,
                                  censored: this.censored,
                                  category: this.category,
                                  chris,
                                })
                                .withCredentials();

      this.results = result.body.response;
      this.loading = false;
      this.error = true;
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => { this.firstLoad = true; }, 3000);
    } catch (error) {
      if (!error.response) {
        this.e.autoHandleError(error);
      } else {
        this.loading = false;
        this.error = true;
      }
    }
  }

  public queryChris() {
    this.query(true);
  }

  public getStatus() {
    if (this.firstLoad) {
      return 0;
    } else if (this.results.length === 0) {
      return -1;
    } else {
      return 1;
    }
  }

  public selectCategory(category: string) {
    this.category = category;
    this.nsfw = false;
    this.censored = false;
    this.input = '';
    this.query();
  }

  public viewNewest() {
    this.category = '';
    this.nsfw = false;
    this.censored = false;
    this.input = '';
    this.query();
  }

}
