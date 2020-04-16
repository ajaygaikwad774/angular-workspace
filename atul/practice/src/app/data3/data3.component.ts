import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data3',
  templateUrl: './data3.component.html',
  styleUrls: ['./data3.component.css']
})
export class Data3Component implements OnInit {

  servername="";
  allowserver=false;

  username="";

  listdata=[];
  constructor() {
    
    setTimeout(()=>{this.allowserver=true} ,0);
   }

  ngOnInit() {
  }

  addserver(event:Event)
  {
      this.servername=(<HTMLInputElement>event.target).value;
  }

  showdata(){
    this.listdata.push(this.username);
  }
}
