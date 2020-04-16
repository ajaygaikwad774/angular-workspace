import { Student } from "./app";

 export class person{

    a:number;
    b:number;
    c:number;

    constructor(a:number,b:number,c:number){

        this.a=a;
        this.b=b;
        this.c=c;

        console.log("addition of three number is = "+(a+b+c));
    }

    display(a,b,c){
     
        console.log("hello world")

        return(a+b+c);
    }

    


}

var obj = new person(1,2,3);
var c=obj.display(1,2,3);
console.log("addition of three number is ="+c);



