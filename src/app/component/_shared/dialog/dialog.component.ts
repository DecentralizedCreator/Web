import { Component, OnInit } from '@angular/core';
import { ErrorService } from '../../../service/utility/error.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(public error: ErrorService) { }

  ngOnInit() { }

}
