import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { UserService } from '../../service/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public activeTab = 0;
  public loading = true;

  constructor(private aroute: ActivatedRoute, public user: UserService) { }

  ngOnInit() {
    this.aroute.params.subscribe((params: Params) => {
      this.user.getUser(params['username']);
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    });
  }

  public resizeTextarea() {
    setTimeout(() => {
      const tes: any = document.querySelectorAll('textarea.td-te');
      tes.forEach(te => {
        te.style.height = '24px';
        te.style.height = te.scrollHeight + 12 + 'px';
      });
    }, 100);
  }

}
