import {Component} from "@angular/core";

@Component({
  selector:'auth-remember',
  template:`<label>
      <input type="checkbox" (change)="onChecked($event.target.checked)">
      Keep me logged in
    </label>`
})
export class AuthRemember {

}