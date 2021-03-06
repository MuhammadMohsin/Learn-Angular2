import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `Current value is : {{currentVal}} 
            <br/>
            <button (click)="addFunc()">Click here to add 2</button>
            <br/>
            change value:  
            <input #newVal (keyup)="changeVal($event, newVal)"/>
            <br/>
            two way binding sample:
            <br/>
            <input type="text" [(ngModel)]="currentText.name"/> {{currentText.name}}`
})
export class AppComponent {

  currentVal = 2;
  currentText = {name: "abc"}

  constructor(){
    this.currentText.name = "xyz";
  }

  addFunc() {
    this.currentVal += 2;
  }

  changeVal(event,newValue) {
    // this.currentVal = event.target.value;
    this.currentVal = Number(newValue.value);
  }

}
