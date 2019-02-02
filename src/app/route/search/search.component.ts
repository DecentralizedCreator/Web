import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../service/form/search.service';

import { Category, Categories } from '../../interface/category';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public showCategories = false;
  public categories: Array<Category> = Categories;

  constructor(public search: SearchService) { }

  ngOnInit() { }

}
