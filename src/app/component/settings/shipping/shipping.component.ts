import { Component, OnInit } from '@angular/core';
import { ShippingService } from '../../../service/settings/shipping.service';

@Component({
  selector: 'app-settings-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {

  constructor(public shipping: ShippingService) { }

  ngOnInit() { }

}
