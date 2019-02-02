import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../service/user/user.service';

@Component({
  selector: 'app-user-banner',
  templateUrl: './user-banner.component.html',
  styleUrls: ['./user-banner.component.scss']
})
export class UserBannerComponent implements OnInit {

  constructor(public user: UserService) { }

  ngOnInit() { }

}
