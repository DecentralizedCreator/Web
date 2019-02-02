import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() label: string;
  @Input() color: string;
  @Input() type: string;

  @Input() loading: boolean;

  constructor() { }

  ngOnInit() { }

}
