import { Component, OnInit } from '@angular/core';
import { MetamaskService } from '../../../service/wallet/metamask.service';

@Component({
  selector: 'app-metamask',
  templateUrl: './metamask.component.html',
  styleUrls: ['./metamask.component.scss']
})
export class MetamaskComponent implements OnInit {

  constructor(public metamask: MetamaskService) { }

  public ngOnInit() {
    this.metamask.init();
  }

}
