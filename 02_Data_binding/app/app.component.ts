import { Component } from '@angular/core';

class Student{
  constructor(public id: number,public name: string){};
}

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{userName}} </h1>
            <ul>
              <li *ngFor="let user of userList">{{user}}</li>
            </ul>
              {{myStudent.name + "---" + myStudent.id}}`
})
export class AppComponent {
  userName = "All Of You";
  userList = ["Mohsin", "Assad", "Jawad"];

  myStudent: any = new Student(10,"Anas");
 }
