import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../service/form/search.service';

import { Category, Categories } from '../../../interface/category';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  public timeout;
  public showFilters = false;
  public categories: Array<Category> = Categories;

  constructor(public search: SearchService) { }

  ngOnInit() { }

  public delayedQuery() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.search.query();
    }, 1000);
  }

}
