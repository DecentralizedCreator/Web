import { Injectable } from '@angular/core';

import { UserInterface } from '../../interface/user';
import { ErrorService } from '../utility/error.service';

import { environment as env } from '../../../environments/environment';
import * as superagent from 'superagent';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public data: UserInterface = {
    _id: '',
    userId: '',
    published: false,
    profileUrl: '',
    nsfw: false,
    censored: false,
    name: '',
    tagline: '',
    photoUrl: '',
    bannerUrl: '',
    description: '',
    websiteUrl: '',
    githubUrl: '',
    facebookUrl: '',
    twitterUrl: '',
    youtubeUrl: '',
    linkedinUrl: '',
    gabUrl: '',
    mindsUrl: '',
    subscriberGoal: 0,
    btcGoal: 0,
    ethGoal: 0,
    xmrGoal: 0,
    dateUpdated: 0,
  };

  public tiers = [];

  public comments = [];

  constructor(private error: ErrorService) { }

  public async getUser(url: string) {
    try {
      const result = await superagent.get(`${env.api}/profile/url/${url}`);

      if (result.body.response) {
        this.data = result.body.response.profile;
        this.tiers = result.body.response.tiers;
        this.getComments();
      } else {
        this.data = null;
      }
    } catch (error) {
      this.error.autoHandleError(error);
    }
  }

  public async getComments() {
    try {
      const result = await superagent.get(`${env.api}/profile/comment/${this.data._id}`);
      this.comments = result.body.response;
    } catch (error) {
      this.error.autoHandleError(error);
    }
  }

  public async postComment(comment: string) {
    try {
      await superagent.post(`${env.api}/profile/comment/${this.data._id}`)
                  .send({ comment })
                  .withCredentials();

      this.getComments();
    }  catch (error) {
      this.error.autoHandleError(error);
    }
  }

  public getPhoto() {
    if (this.data.photoUrl) {
      return `${env.api}/${this.data.photoUrl}`;
    } else {
      return `/assets/img/lambda.png`;
    }
  }

  public getBanner() {
    if (this.data.bannerUrl) {
      return `${env.api}/${this.data.bannerUrl}`;
    } else {
      return `/assets/img/lambda.png`;
    }
  }

  public getCurrencyIcon(type: string) {
    if (type === 'BTC') {
      return 'fab fa-bitcoin';
    } else if (type === 'ETH') {
      return 'fab fa-ethereum';
    } else {
      return 'fab fa-monero';
    }
  }

  public getImage(url: string) {
    if (url) {
      return `${env.api}/${url}`;
    } else {
      return `/assets/img/lambda.png`;
    }
  }

}
