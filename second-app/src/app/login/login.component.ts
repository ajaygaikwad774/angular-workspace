import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "";
  password = "";
  validLogin = false;
  message = "";
  uname = ''

  constructor() { }

  ngOnInit() {
  }

  handleLogin(){

    if (this.username == "sagar" && this.password == "gunwanta") {
      this.validLogin = true;
      this.message = "Login Successfully ! welcome "+this.username;
    } else {
      this.validLogin = false;
      this.message = "Invalid Username/Password";
    }
  }

}
