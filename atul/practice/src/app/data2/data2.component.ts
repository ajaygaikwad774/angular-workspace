import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server1',
  templateUrl: './data2.component.html',
  
})
export class Server1Component implements OnInit {

  allowserver=false;
  servername = "";
  serverStatus="Server not created";
   status = false;

   serverList = [];

  constructor() {

   setTimeout(() => {
     this.allowserver=true;
   }, 3000);

   }

  ngOnInit() {
  }

  creatfunction()
  {
      this.serverStatus="Server was created with the name "+this.servername;
  }

  
  handleEvent(abcd : Event){
      
    this.servername = (<HTMLInputElement>abcd.target).value;
  
  }

  createServer(){
    this.serverList.push(this.servername);
    this.serverStatus="Server was created with the name "+this.servername;
  }

  hideshow(){
    this.status = true; 
  }

}

