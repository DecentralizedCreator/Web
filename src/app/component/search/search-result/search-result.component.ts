import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../service/form/search.service';

import { environment as env } from '../../../../environments/environment';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  constructor(public search: SearchService) { }

  ngOnInit() { }

  public photoImage(url) {
    return `${env.api}/${url}`;
  }

}
