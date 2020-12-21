import {Component, Output, EventEmitter} from "@angular/core";

@Component({
  selector:'auth-remember',
  template:`<label>
      <input type="checkbox" (change)="onChecked($event.target)">
      Keep me logged in
    </label>`
})
export class AuthRemember {
  @Output() checked: EventEmitter<boolean> = new EventEmitter <boolean>(); 

  onChecked(ele){
    console.log("checked fire!");
    console.log(ele.checked);
    this.checked.emit(ele.checked);

  }

}