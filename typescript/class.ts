export class Teacher {   // parent class,super class, base class
    id:number;
    name:string;
    salary:number;
    gender:string;

    constructor(id:number,name:string,salary:number,gender:string){
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.gender = gender;
    }
}
export class Student extends Teacher {
    
    constructor(){
        super(1,"Atul Araskar",12000,"Female");
    }
   
    assign():any{
        console.log("Student ajay have bee assigned a teacher with details mentioned below ");
    }

   display():void{
       console.log(this.id+" "+this.name+" "+this.salary+" "+this.gender);
   }   

}
var obj = new Student();
obj.assign();
obj.display();