import { Component } from '@angular/core';

@Component(
  {
    selector: '[app-root]',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  }
)

export class AppComponent {
  
  title = 'first-app';  //data variable  

  //Method
  add(a : number , b : number){
      return a+b;
  }
  
}
