import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../../service/form/register.service';

@Component({
  selector: 'app-registration-dialog',
  templateUrl: './registration-dialog.component.html',
  styleUrls: ['./registration-dialog.component.scss']
})
export class RegistrationDialogComponent implements OnInit {

  constructor(public register: RegisterService) { }

  ngOnInit() { }

}
