

interface User {
    username:string;
    password:string;
}


var user:User;   

user = { username:"manager", password:"sai@123" };

console.log(user.username+" "+user.password);
