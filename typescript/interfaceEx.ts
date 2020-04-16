

interface Xyz {
    id:number;
    firstName:string;
    lastName:string; 
}

var emp = {
     id:1,
     firstName:"Ajay",
     lastName:"Gaikwad"
}

console.log("*************** Emp Object  Without using interface  *************");
console.log("Your id is "+emp.id);
console.log("Your name  is "+emp.firstName+" "+emp.lastName);


var employee:Xyz = {
    id: 2,
    firstName : "Bala",
    lastName : "Prasad"
}

console.log("*************** Employee Object using interface *****************");
console.log("Your id is "+employee.id);
console.log("Your name  is "+employee.firstName+" "+employee.lastName);