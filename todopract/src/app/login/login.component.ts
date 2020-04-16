import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Students } from '../todo/Students';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  id:number;
  name:string;
  age:any;
  email:string;
  a:number;
  constructor(private ds:DataService) { }

  ngOnInit() {
  }

  SubmitHandler(){
    this.a = <number> this.age;
    this.ds.saveStudent(new Students(this.name,this.a,this.email));

  }


}
