import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../service/user/user.service';

@Component({
  selector: 'app-user-description',
  templateUrl: './user-description.component.html',
  styleUrls: ['./user-description.component.scss']
})
export class UserDescriptionComponent implements OnInit {

  constructor(public user: UserService) { }

  ngOnInit() {
    setTimeout(() => {
      this.resizeTextarea();
    }, 500);
  }

  public resizeTextarea() {
    const te: any = document.querySelector('textarea.ud-te');
    te.style.height = '24px';
    te.style.height = te.scrollHeight + 12 + 'px';
  }

}
