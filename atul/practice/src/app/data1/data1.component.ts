import { Component } from '@angular/core';


@Component({

    selector:'app-data1',
    templateUrl:"./data1.component.html"

})

      
export class DataComponent{

    dataid=10;

    datastatus='offline';

    allowserver=false;

    serverStatus="Serve nont created...!";

    constructor(){

        setTimeout(()=>{
            this.allowserver=true;
        },3000);
    }

    createServer()
    {
        this.serverStatus="server was creted...!";
    }

}