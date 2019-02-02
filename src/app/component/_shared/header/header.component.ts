import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../../service/utility/session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public headerToggle = false;

  constructor(public session: SessionService) { }

  ngOnInit() {}

}
