import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  public donationTab = 'BTC';

  public BTC = '3JYW6jNYDDmPV96SFwt5BaaZp5EKqQqg2q';
  public ETH = '0xEa164375af199f85FAc440878Dd564CC4748cD94';
  public DOGE = 'DKR72ivHVJmgsSMFcdYTdYa8vZzRKhyHfs';

  constructor() { }
}
