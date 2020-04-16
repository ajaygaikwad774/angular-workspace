import { Component, OnInit } from '@angular/core';
import { Students } from './Students';
import { DataService } from '../data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  stud = []; 

  constructor(private ds:DataService) { }

  ngOnInit() {
  }

  display(){
   return this.ds.getAllData().subscribe(response=>this.stud = response);
  }

}
