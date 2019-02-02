import { Component, OnInit } from '@angular/core';

import { SearchService } from '../../../service/form/search.service';
import { Category, Categories } from '../../../interface/category';

@Component({
  selector: 'app-search-preview',
  templateUrl: './search-preview.component.html',
  styleUrls: ['./search-preview.component.scss']
})
export class SearchPreviewComponent implements OnInit {

  public showCategories = false;
  public categories: Array<Category> = Categories;

  constructor(public search: SearchService) { }

  ngOnInit() { }

}
