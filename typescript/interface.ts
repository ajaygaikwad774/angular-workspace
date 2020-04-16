interface Person {
    getData(id:number,name:string):void;
    putData():void;
    
}
export class TestParent implements Person {
    
    id:number;
    name:string;

    getData(id: number , name: string):void{
       this.id = id;
       this.name = name;
    }

    putData():void{
       console.log("Your id is "+this.id+" your name is "+this.name);
    }

}
var obj = new TestParent();
obj.getData(10,"Ajay Gaikwad");
obj.putData();