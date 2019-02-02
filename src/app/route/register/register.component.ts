import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RegisterService } from '../../service/form/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(public forms: RegisterService, private aroute: ActivatedRoute) { }

  ngOnInit() {
    this.aroute.url.subscribe((url: any) => {
      this.forms.activeTab = url[0].path;
    });
  }

}
