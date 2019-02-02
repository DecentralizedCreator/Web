import { Component, OnInit } from '@angular/core';

import { RegisterService } from '../../../service/form/register.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor(public forms: RegisterService) { }

  ngOnInit() { }

}
