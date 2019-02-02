import { Component, OnInit, Input } from '@angular/core';

import { RegisterService } from '../../../service/form/register.service';

@Component({
  selector: 'app-register-tabs',
  templateUrl: './register-tabs.component.html',
  styleUrls: ['./register-tabs.component.scss']
})
export class RegisterTabsComponent implements OnInit {

  @Input() tab = 'register';

  constructor(public forms: RegisterService) { }

  ngOnInit() { }

}
