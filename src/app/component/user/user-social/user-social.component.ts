import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../service/user/user.service';

@Component({
  selector: 'app-user-social',
  templateUrl: './user-social.component.html',
  styleUrls: ['./user-social.component.scss']
})
export class UserSocialComponent implements OnInit {

  constructor(public user: UserService) { }

  ngOnInit() { }

}
