import { Injectable } from '@angular/core';

import { ErrorService } from '../utility/error.service';

import { environment as env } from '../../../environments/environment';
import * as superagent from 'superagent';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  public profileId = '';

  public form = {
    published: false,
    profileUrl: '',
    categories: [],
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

  public data = {
    published: false,
    profileUrl: '',
    categories: [],
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

  public subscriberTiers = [];

  constructor(public error: ErrorService) {}

  public async getProfile() {
    if (!this.profileId) { return; }

    try {
      const result = await superagent.get(`${env.api}/profile/id/${this.profileId}`)
                            .withCredentials();

      if (result.body.response) {
        this.getSubTiers();

        const data = result.body.response;

        this.profileId = data._id;

        this.data.published = data.published;
        this.data.profileUrl = data.profileUrl;
        this.data.categories = data.categories || [];
        this.data.nsfw = data.nsfw;
        this.data.censored = data.censored;
        this.data.name = data.name;
        this.data.tagline = data.tagline;
        this.data.photoUrl = data.photoUrl;
        this.data.bannerUrl = data.bannerUrl;
        this.data.description = data.description;
        this.data.websiteUrl = data.websiteUrl;
        this.data.githubUrl = data.githubUrl;
        this.data.facebookUrl = data.facebookUrl;
        this.data.twitterUrl = data.twitterUrl;
        this.data.youtubeUrl = data.youtubeUrl;
        this.data.linkedinUrl = data.linkedinUrl;
        this.data.gabUrl = data.gabUrl;
        this.data.mindsUrl = data.mindsUrl;
        this.data.subscriberGoal = data.subscriberGoal;
        this.data.btcGoal = data.btcGoal;
        this.data.ethGoal = data.ethGoal;
        this.data.xmrGoal = data.xmrGoal;
        this.data.dateUpdated = data.dateUpdated;

        this.form.published = data.published;
        this.form.profileUrl = data.profileUrl;
        this.form.categories = data.categories || [];
        this.form.nsfw = data.nsfw;
        this.form.censored = data.censored;
        this.form.name = data.name;
        this.form.tagline = data.tagline;
        this.form.photoUrl = data.photoUrl;
        this.form.bannerUrl = data.bannerUrl;
        this.form.description = data.description;
        this.form.websiteUrl = data.websiteUrl;
        this.form.githubUrl = data.githubUrl;
        this.form.facebookUrl = data.facebookUrl;
        this.form.twitterUrl = data.twitterUrl;
        this.form.youtubeUrl = data.youtubeUrl;
        this.form.linkedinUrl = data.linkedinUrl;
        this.form.gabUrl = data.gabUrl;
        this.form.mindsUrl = data.mindsUrl;
        this.form.subscriberGoal = data.subscriberGoal;
        this.form.btcGoal = data.btcGoal;
        this.form.ethGoal = data.ethGoal;
        this.form.xmrGoal = data.xmrGoal;
        this.form.dateUpdated = data.dateUpdated;

      }
    } catch (error) {
      this.error.autoHandleError(error);
    }
  }

  public async getSubTiers() {
    try {
      const result = superagent.get(`${env.api}/profile/subscriptions/${this.profileId}`)
                            .withCredentials();

      this.subscriberTiers = result.body.response;
    } catch (error) {
      this.error.autoHandleError(error);
    }
  }

}
