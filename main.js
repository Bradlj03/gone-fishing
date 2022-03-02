//## Create arrays that will be needed to create the Random fish name. 

let namesOfFish = [ "Alaskan Salmon","Cod" , "Herring", "Perch", "Tout"];
let fishAdjectives1 = [ "Giant", "Royal", "Tiny"]
let fishAdjectives2 = [ "Blue", "Pink", "Rare"]

//# Create array that will be used store the fish kept and the fish discarded.
//let fishname = randomFish;

//let keptFish = [



//];
//let discardedFish = [

//];

let randomFish = randomFishGenerator();
let fishWeight = randomWeight();
let fishValue = randomValue();

//## 2a: Generating random fish:::: This code works and has been verified

function randomFishGenerator(){
  let randomAdjective1 = fishAdjectives1[Math.floor(Math.random() * fishAdjectives1.length)];
  let randomAdjective2 = fishAdjectives2[Math.floor(Math.random() * fishAdjectives2.length)];
  let randomFishtype = namesOfFish[Math.floor(Math.random() * namesOfFish.length)];
  return `${randomAdjective1} ${randomAdjective2} ${randomFishtype}`;
}
//## Generate randon fish weight:::::: This code works and has been verified
function randomWeight(min, max){
  let weight = (Math.random()* (6).toFixed(2));
  return (weight + "lbs");
}

//## Generate Randon Fish Value:::::  This code works and has been verified
function randomValue(min, max){
  let value = (Math.random()* (11.00 - 1.00 + 1.00).toFixed(2));
  return ("$" + value );
}
//test//console.log(randomFish)
//test//console.log(fishWeight)
//test//console.log(fishValue)

const prompt = require("prompt-sync")()
console.log("You have gone fishing! Try to maximize the value of your caught fish. ");
console.log("You can fish for six hours ( * until 12:00 PM *) and can catch as most 10 lbs of fish.")



console.log("============================================================================================");
console.log("Time to cast you reel! Go!!!!")
//console.log(`You caught a ${randomFish} weighing ${fishWeight} with a value of ${fishValue}!`);
console.log("the time is 6:00am. So far you have caught:")
let weight = 0;
let count = 0;
while (count <= 6 || weight <10) {
    console.log("Enter [1] to catch fish -- Enter [2] to release fish ")
    input = Number(prompt(" > "))
    if(input === 1){
      console.log(`You caught a ${randomFish} weighing ${fishWeight} with a value of ${fishValue}!`);



    }

    count++; 
    console.log('');

      
  }

  
{
  
};






