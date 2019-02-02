import { Component, OnInit, ApplicationRef } from '@angular/core';

import { UtilityService } from '../../../service/utility/utility.service';
import { ErrorService } from '../../../service/utility/error.service';
import { ProfileService } from '../../../service/profile/profile.service';

import { environment as env } from '../../../../environments/environment';
import * as superagent from 'superagent';
import * as moment from 'moment';

@Component({
  selector: 'app-profile-tiers',
  templateUrl: './profile-tiers.component.html',
  styleUrls: ['./profile-tiers.component.scss']
})
export class ProfileTiersComponent implements OnInit {

  public photoLoading = false;

  public mto;
  public messageState = 0;
  public message = '';

  public activeTier = 0;
  public tiers = [];
  public errors = [];

  constructor(public profile: ProfileService, public utility: UtilityService, public error: ErrorService, private ref: ApplicationRef) { }

  ngOnInit() {
    this.getTiers();

    const el: any = document.querySelector('#tier-photo-input');
    el.onchange = async () => {
      this.photoLoading = true;
      const file = el.files[0];

      try {
        const result = await superagent.post(`${env.api}/profile/${this.profile.profileId}/tier/photo/${this.activeTier}`)
                                  .attach('photo', file)
                                  .withCredentials();

        this.tiers[this.activeTier]['photo'] = result.body.response.path;
      } catch (error) {
        this.error.autoHandleError(error);
      }

      this.photoLoading = false;
    };
  }

  public addTime(index: number, time: number) {
    if (this.tiers[index]['expiryTime'] && this.tiers[index]['expiryTime'] > 0) {
      this.tiers[index]['expiryTime'] += time;
    } else {
      this.tiers[index]['expiryTime'] = time;
    }
    this.ref.tick();
  }

  public photoImage(i) {
    return this.utility.getImage(this.tiers[i]['photo']);
  }

  public clickEvent() {
    const el: any = document.querySelector('#tier-photo-input');
    el.click();
  }

  public async shiftLeft() {
    if (this.activeTier > 0) {
      try {
        await superagent.patch(`${env.api}/profile/${this.profile.profileId}/tier/shift`)
                    .send({ index: this.activeTier, direction: 'left' })
                    .withCredentials();

        const placeholder = this.tiers[this.activeTier];
        placeholder['index']--;
        this.tiers[this.activeTier] = this.tiers[this.activeTier - 1];
        this.tiers[this.activeTier]['index']++;
        this.tiers[this.activeTier - 1] = placeholder;
        this.activeTier--;
      } catch (error) {
        this.error.autoHandleError(error);
      }
    }
  }

  public async shiftRight() {
    if (this.activeTier < this.tiers.length - 1) {
      try {
        await superagent.patch(`${env.api}/profile/${this.profile.profileId}/tier/shift`)
                    .send({ index: this.activeTier, direction: 'right' })
                    .withCredentials();

        const placeholder = this.tiers[this.activeTier];
        placeholder['index']++;
        this.tiers[this.activeTier] = this.tiers[this.activeTier + 1];
        this.tiers[this.activeTier]['index']--;
        this.tiers[this.activeTier + 1] = placeholder;
        this.activeTier++;
      } catch (error) {
        this.error.autoHandleError(error);
      }
    }
  }

  public async getTiers() {
    try {
      const result = await superagent.get(`${env.api}/profile/${this.profile.profileId}/tier`)
                                  .withCredentials();

      this.tiers = result.body.response || [];

      if (this.tiers.length === 0) {
        this.createPlaceholder();
      } else {
        for (let i = 0; i < this.tiers.length; i++) {
          this.errors.push([]);
        }
      }
    } catch (error) {
      this.error.autoHandleError(error);
    }
  }

  public createPlaceholder(index = this.tiers.length) {
    if (this.tiers.length > 0) {
      if (this.tiers[this.tiers.length - 1]['dateUpdated'] === 0) {
        return false;
      }
    }

    this.errors.push([]);
    this.tiers.push({
      profileId: '',
      index,
      title: '',
      photo: '',
      hasLimit: false,
      limit: 0,
      requireShipping: false,
      description: '',
      currency: 'ETH',
      amount: 0,
      expiryTime: 0,
      published: false,
      dateUpdated: 0,
    });
  }

  public async deleteTier(index) {
    if (this.tiers[index]['dateUpdated'] === 0) {
      this.tiers.splice(index, 1);
      this.activeTier = index - 1;
    } else {
      try {
        await superagent.delete(`${env.api}/profile/${this.profile.profileId}/tier/del/${index}`)
                      .withCredentials();

        this.getTiers();
        this.activeTier = 0;
      } catch (error) {
        this.error.autoHandleError(error);
      }
    }

    if (this.tiers.length === 0) {
      this.createPlaceholder();
    }
  }

  public async updateTier(index) {
    const payload = this.tiers[index];

    try {
      await superagent.post(`${env.api}/profile/${this.profile.profileId}/tier`)
                  .send(payload)
                  .withCredentials();

      this.tiers[index]['dateUpdated'] = Number(new Date());
      this.errors[index] = [];
      this.updateMessage();
    } catch (error) {
      if (!error.response) {
        this.error.autoHandleError(error);
      } else {
        this.errors[index] = error.response.body.errors;
      }
    }

  }

  public returnErrorKey(index, key) {
    let message = '';
    this.errors[index].forEach(error => {
      if (error.key === key) {
        message = error.message;
      }
    });

    return message;
  }

  public updateMessage() {
    clearTimeout(this.mto);
    this.messageState = 1;
    this.message = 'Tier updated!~';
    this.mto = setTimeout(() => {
      this.messageState = 0;
    }, 1500);
  }

}
