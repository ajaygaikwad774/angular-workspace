import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router) {  }
  
  username:string="";
  password:string="";
  massage:string="";
  loginstatus:boolean=false;

  ngOnInit() {
  }

  run(){
    if (this.username==="admin" && this.password==="admin") {

      this.loginstatus=true;
      this.massage="login sucessfuly";
      this.route.navigate(["welcome",this.username]);
    } else {
      
      this.loginstatus=false;
        this.massage="error found";
    }
  }

}
