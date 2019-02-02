import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../service/settings/settings.service';

@Component({
  selector: 'app-settings-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {

  constructor(public settings: SettingsService) { }

  ngOnInit() { }

}
