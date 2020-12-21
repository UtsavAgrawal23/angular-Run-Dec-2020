import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent  {
  remember:boolean = false;

  rememberUser(value: boolean){
    this.remember = value
  }
}
