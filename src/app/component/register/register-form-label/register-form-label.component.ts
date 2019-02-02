import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-register-form-label',
  templateUrl: './register-form-label.component.html',
  styleUrls: ['./register-form-label.component.scss']
})
export class RegisterFormLabelComponent implements OnInit {

  @Input() label: string;
  @Input() state: string;
  @Input() message: string;
  @Input() active: boolean;

  constructor() { }

  ngOnInit() { }

}
