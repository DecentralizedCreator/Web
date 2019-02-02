import { Injectable } from '@angular/core';

export interface ErrorItem {
  message: string;
  color: string;
  visible: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  public errors: Array<ErrorItem> = [];

  constructor() { }

  public autoHandleError(error) {
    if (error.response) {
      this.pushError(error.response.body.message, 'red');
    } else {
      this.pushError('The API appears to be offline...', 'red');
    }
  }

  public pushError(message, color) {
    const NewError: ErrorItem = {
      message,
      color,
      visible: true,
    };

    this.errors.unshift(NewError);
  }

  public removeError(index) {
    this.errors[index]['visible'] = false;
    setTimeout(() => {
      this.errors.splice(index, 1);
    }, 500);
  }

}
