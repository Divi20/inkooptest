/*

There is a car with 30L of petrol.
It needs to travel from 0 to 100KMs.
The car moves in steps, at each step car can move between 0KM to 6KM (generate a random number).
Car has a mileage of 1KM/L.
You can place 5 random petrol pumps on the road.
Every time the car reaches petrol pump, the car gets a refill of 20L.
You can also 5 random shortcuts on the road.
The shortcut can take you in any direction i.e. forward or backward.
The shortcut should have atleast 5 steps and at most 10 steps.
There are also three random pits on the road.
If your car lands at the pit, the game ends immediately.
Write a python script to run this game and print every step of the car with current position, petrol remaining, shortcut taken(if any).

*/

const carPetrol  = 30
const totalDistance = 100
const kmPerStep = 6
const totalPetrolPumps = 5
//km travelled == petrol used
const kmTravelled = 0;
var petrolLeft = 0;
const minStepsOfShortCut = 5;
const maxSetOfShortCut = 10;
var currentPosition;
var petrolPumpPositions = [];


var min=1; 
var max=100;  
var i = 0
var step =0;
//generating positions of petrol pump in array
while(i<totalPetrolPumps){
     petrolPumpPositions.push(Math.floor(Math.random() * (+max - +min)) + +min);
     i++;
}

petrolPumpPositions = petrolPumpPositions.sort();
//petrol pump generated
//moving car 
//reaching the values in array
var count = 0;
function car(){
    
    while(step<totalDistance){

        for(let vp = 0; vp < petrolPumpPositions.length; vp++){
//0 nothing will happen 
//0+6+6 = got it 
            if(step == petrolPumpPositions[vp]){      //finding number that matches a value in the array
                currentPosition = step;
                petrolLeft = (carPetrol - step) + 20
              remainingDistance = totalDistance - step;

                console.log("current position:", currentPosition);
                console.log("petrolLeft:", petrolLeft);
            }
           
        }
        step = step+6;
    }

count ++;

}

console.log("Output")
car()
console.log("remaining distnace:", remainingDistance)
console.log("current position:", currentPosition);
console.log("petrolLeft:", petrolLeft);
