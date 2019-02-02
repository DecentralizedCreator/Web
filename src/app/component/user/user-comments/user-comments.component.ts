import { Component, OnInit } from '@angular/core';

import { UtilityService } from '../../../service/utility/utility.service';
import { UserService } from '../../../service/user/user.service';
import { SessionService } from '../../../service/utility/session.service';

import * as moment from 'moment';

@Component({
  selector: 'app-user-comments',
  templateUrl: './user-comments.component.html',
  styleUrls: ['./user-comments.component.scss']
})
export class UserCommentsComponent implements OnInit {

  public comment: string;

  constructor(public user: UserService, public session: SessionService, public utility: UtilityService) { }

  ngOnInit() { }

  public async submitComment() {
    this.user.postComment(this.comment);
    this.comment = '';
  }

}
