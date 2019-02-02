import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../service/user/user.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss']
})
export class UserHeaderComponent implements OnInit {

  constructor(public user: UserService) { }

  ngOnInit() { }

}
