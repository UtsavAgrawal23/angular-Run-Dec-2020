import {Component, Output, EventEmitter} from "@angular/core";

@Component({
  selector:'auth-remember',
  template:`<label>
      <input type="checkbox" (change)="onChecked($event.target.checked)">
      Keep me logged in
    </label>`
})
export class AuthRemember {
  @Output() checked: EventEmitter<boolean> = new EventEmitter<boolean>(); 

  onChecked(value:boolean){
    console.log("checked fire!");
    this.checked.emit(value);

  }

}