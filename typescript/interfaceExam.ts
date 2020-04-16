

interface CanDrive{
    accelerate(speed:number):void;
}

export let car:CanDrive = {
    accelerate:function (speed:number):void{
     console.log("Your are up to "+speed+" kmph");   
    }
}

console.log(car.accelerate(100));

