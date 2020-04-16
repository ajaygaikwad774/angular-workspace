import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  uname="";
  password="";
  msg="";
  validLogin=false;
  mark="67";

  fruits = ["mango","apple"]
  constructor() { }

  ngOnInit() {
  }

  handleLogin(){
    if(this.uname==="gun" && this.password ==="gun"){
      this.msg="login successfully ";
      this.validLogin=true;

    }else{
      this.msg="invalid username and password";
      this.validLogin=false;
    }


  }

}
