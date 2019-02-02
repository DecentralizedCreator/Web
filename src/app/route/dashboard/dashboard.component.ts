import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../service/utility/session.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public session: SessionService) { }

  ngOnInit() {
    this.session.restrictedAccess();
  }

}
