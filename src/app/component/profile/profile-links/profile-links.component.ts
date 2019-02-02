import { Component, OnInit } from '@angular/core';

import { UtilityService } from '../../../service/utility/utility.service';
import { ErrorService } from '../../../service/utility/error.service';
import { ProfileService } from '../../../service/profile/profile.service';

import { environment as env } from '../../../../environments/environment';
import * as superagent from 'superagent';

@Component({
  selector: 'app-profile-links',
  templateUrl: './profile-links.component.html',
  styleUrls: ['./profile-links.component.scss']
})
export class ProfileLinksComponent implements OnInit {

  private messageTimeout;

  public errors = [];
  public message = '';
  public messageState = 0;

  constructor(public profile: ProfileService, public utility: UtilityService, public error: ErrorService) { }

  ngOnInit() { }

  public update() {
    this.updateProfile(
      this.profile.form.websiteUrl,
      this.profile.form.githubUrl,
      this.profile.form.facebookUrl,
      this.profile.form.twitterUrl,
      this.profile.form.youtubeUrl,
      this.profile.form.linkedinUrl,
      this.profile.form.gabUrl,
      this.profile.form.mindsUrl,
    );
  }

  public async updateProfile(
    websiteUrl: string,
    githubUrl: string,
    facebookUrl: string,
    twitterUrl: string,
    youtubeUrl: string,
    linkedinUrl: string,
    gabUrl: string,
    mindsUrl: string,
  ) {
    try {
      const result = await superagent
                      .patch(`${env.api}/profile/links`)
                      .send({
                        profileId: this.profile.profileId,
                        websiteUrl,
                        githubUrl,
                        facebookUrl,
                        twitterUrl,
                        youtubeUrl,
                        linkedinUrl ,
                        gabUrl,
                        mindsUrl,
                      }).withCredentials();

      this.profile.data.websiteUrl = websiteUrl;
      this.profile.data.githubUrl = githubUrl;
      this.profile.data.facebookUrl = facebookUrl;
      this.profile.data.twitterUrl = twitterUrl;
      this.profile.data.youtubeUrl = youtubeUrl;
      this.profile.data.linkedinUrl = linkedinUrl;
      this.profile.data.gabUrl = gabUrl;
      this.profile.data.mindsUrl = mindsUrl;

      this.message = result.body.message;
      this.messageState = 1;
      this.emitMessage();
    } catch (error) {
      if (!error) {
        this.error.autoHandleError(error);
      } else {
        this.message = error.response.body.errors[0]['message'];
        this.messageState = -1;
        this.emitMessage();
      }
    }
  }

  public emitMessage() {
    clearTimeout(this.messageTimeout);
    this.messageTimeout = setTimeout(() => {
      this.messageState = 0;
    }, 3500);
  }

}
