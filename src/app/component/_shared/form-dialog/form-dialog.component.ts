import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss']
})
export class FormDialogComponent implements OnInit {

  @Input() active: boolean;
  @Input() state: string;
  @Input() message: string;

  constructor() {
    this.active = false;
    this.state = 'green';
    this.message = 'Hello World!~';
  }

  ngOnInit() { }

}
