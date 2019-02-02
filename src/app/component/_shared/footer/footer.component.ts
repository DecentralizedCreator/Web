import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../../../service/utility/crypto.service';
import { environment as env } from '../../../../environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public altUrl = env.altUrl;
  public altLabel = env.altLabel;

  constructor(public crypto: CryptoService) { }

  ngOnInit() { }

  public scrollToTop(scrollDuration) {
    const cosParameter = window.scrollY / 2;

    let scrollCount = 0;
    let oldTimestamp = performance.now();

    function step (newTimestamp) {
        scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp));
        if (scrollCount >= Math.PI) { window.scrollTo(0, 0); }
        if (window.scrollY === 0) { return; }
        window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)));
        oldTimestamp = newTimestamp;
        window.requestAnimationFrame(step);
    }

    window.requestAnimationFrame(step);
  }

}
