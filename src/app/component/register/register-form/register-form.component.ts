import { Component, OnInit } from '@angular/core';

import { RegisterService } from '../../../service/form/register.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  constructor(public forms: RegisterService) { }

  ngOnInit() { }

}
