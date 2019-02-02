import { Component, OnInit } from '@angular/core';

import { UtilityService } from '../../../service/utility/utility.service';
import { ErrorService } from '../../../service/utility/error.service';
import { ProfileService } from '../../../service/profile/profile.service';

import { environment as env } from '../../../../environments/environment';
import * as superagent from 'superagent';

import { Category, Categories } from '../../../interface/category';

@Component({
  selector: 'app-profile-categories',
  templateUrl: './profile-categories.component.html',
  styleUrls: ['./profile-categories.component.scss']
})
export class ProfileCategoriesComponent implements OnInit {

  public timeout;
  public max = 3;
  public categories: Array<Category> = Categories;

  constructor(public profile: ProfileService, public utility: UtilityService, public error: ErrorService) { }

  ngOnInit() { }

  public hasCategory(category: Category) {
    let has = false;
    this.profile.form.categories.forEach((check: string) => {
      if (category.name === check) { has = true; }
    });
    return has;
  }

  public addCategory(category: Category) {
    if (this.hasCategory(category)) {
      this.removeCategory(category);
    } else {
      if (this.profile.form.categories.length >= this.max) { return; }
      this.profile.form.categories.push(category.name);
    }
  }

  public removeCategory(category: Category) {
    this.profile.form.categories.forEach((check: string, index: number) => {
      if (category.name === check) {
        this.profile.form.categories.splice(index, 1);
      }
    });
  }

  public async updateCategories() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(async () => {
      try {
        await superagent.post(`${env.api}/profile/categories`)
                    .send({ profileId: this.profile.profileId, categories: this.profile.form.categories })
                    .withCredentials();
      } catch (error) {
        this.error.autoHandleError(error);
      }
    }, 2500);
  }

}
