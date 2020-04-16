import {Component} from '@angular/core';
 
@Component({
        selector:'app-server',
        templateUrl:'./server.component.html'
    }
)


export class ServerComponent{

    allowNewServer =  false;
    serverCreationStatus = "No server Created";
    serverName = "";
    server = [];

    serverCreateStatus = false;
    constructor(){
       setTimeout(() => {
          this.allowNewServer = true;
       },2000)
    }


    onCreateServer(){
        this.serverCreateStatus = true;
        this.serverCreationStatus = "Server was Created and Name is "+this.serverName;
        this.server.push(this.serverName);
    }

    onUpdateServer(event: Event){
      this.serverName =  (<HTMLInputElement>event.target).value;
    }
}