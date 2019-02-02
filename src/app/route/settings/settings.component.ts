import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../service/utility/session.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(public session: SessionService) { }

  ngOnInit() {
    this.session.restrictedAccess();
  }

}
