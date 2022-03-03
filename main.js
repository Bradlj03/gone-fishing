//**After completing each step below, make a commit in git!**

//## Step 1: Foundation
//fishing game will require us to create a loop that displays 
//information to the user, then prompts the user for an action.
const prompt = require("prompt-sync")();

// create a array to hold the fish to be displayed. 
// the time to fish shall not last more then 6 hours. 
// create a variable that will aloow the time to count in the loop later (consider a function.)

startTime = 6
catchOfDay = []
keptFish()


//## Step 2: Generating random fish
// A random fish will need a randomly generated name that consists 
// of two adjectives and a fish-type (i.e.: 'Blue-finned Surface Perch')
// The first array should contain fish adjectives.
// The second array should contain different fish adjectives. 
// The third array should contain types of fish. Each array should
// have at least 10 values in it.

//## best way to accomplish this task is with a function

function randomFishCreator(){
    fishAdj1 = ['Large', 'Small', 'Great', 'Elusive', 'Peppered', 'Salty', 'Common', 'Electric', 'Spotted', 'Tiny', 'Striped', 'Majestic', 'Heavenly', 'Ghostly', 'Ancient', 'Ol', 'Dainty',  'Royal'];
    fishAdj2 = ['Blue', 'Yellow', 'Brown', 'White', 'Purple', 'Red', 'Black', 'Tan', 'Orange', 'Green', 'Pink', 'Gray', 'Amber', 'Scarlet', 'Copper', 'Golden', 'Silver', 'Bronze', 'Rose', 'Rust', 'Sapphire', 'Maroon'];
    fishType = ['Trout', 'Tuna', 'Salmon', 'Bass', 'Carp', 'Cod', 'Flounder', 'Snapper', 'Grouper', 'Haddock', 'Halibut', 'Herring', 'Mackerel', 'Marlin', 'Mullet', 'Perch', 'Tilapia', 'Walleye'];
    let mixAndMatchFish = fishAdj1[Math.floor(Math.random()*fishAdj1.length)] + " " + fishAdj2[Math.floor(Math.random()* fishAdj2.length)] + fishType[Math.floor(Math.random()* fishType)];
    return mixAndMatchFish

}

function randomFish(){
    let name = randomFishCreator();
    let weight = randomWeight();
    let value = randomValue();
    return { name, weight, value}
}




// ### Step 2B: Generating a random fish weight
// Now it's time to generate a random weight and value. For this,
// you might want to generate a random number between 0.00 and 10.00 with two decimal points.
// To do this, you could generate a random integer between 0 and 1,000, then divide it by 100.

function randomWeight(){
    let weight = (Math.ceil(Math.random()* 1000)/100);
    return (weight);
}

// ## Generating a random fish value
function randomValue(min, max){
    let value = (Math.ceil(Math.random()* 1000)/100);
    return ("$" + value );
}

// ### Step 2D: Display the fish to the user.
// With our random fish generation in place, you'll want 
// to randomly generate a fish each iteration of our loop.

// ## Step 3: Allowing the user to catch or release
// create array to hold captured fish.
// If the user decides to release the fish, do nothing. 
// If the decide to keep the fish lets `.push that 
function keptFish(){
    console.log("There is a tug on your line!!")
    console.log("You've caught a fish!!!");
    let fish = randomFish()
    console.log(fish)
    decide = Number(prompt("Please Enter [1] to keep the fish or [2] to release it."));
    console.log(">")
        if (decide === 1){
            catchOfDay.push(fish)
            startTime++
            return fishBucket()
        }
        if(startTime === 12){
            return outOfTime()
        }
        if(decide === 2){
            startTime++
            return fishBucket()
        }
    




}

// ## Step 4: Displaying the user's total fish and value
// At the beginning of our while loop, add code that calculates the 
// sums of the caught fishes' weight and value (one or more functions would
// be handy for this). Then display these values to the user.
// create a function that tracks the total amount of fish

function fishCount(){
    if(keptFish.length ===1){
        return console.log("You have 1 fish")
    }else{
        return console.log("Wow!!! You Have") + keptFish.length

    }
}

function sumOfValue() {
    let total = 0;
    for (let i = 0; i < catchOfDay.length; i++) {
        total = total + catchOfDay[i].value;
    }
    return total;}




// ## Step 5: Adding a catch limit
// they shouldn't be able to catch more than 10 lbs of fish. If a fish would
// put them over this threshold, we'll automatically release it.
// In our while loop, after generating a random fishbut before prompting the user for what to do, determine whether the new fish would put the user
// over weight limit.

function combinedWeight(){
    let totalweight = 0
    for (let i of catchOfDay) {
        totalweight = totalweight + i.weight;
    }
    return parseFloat(totalweight);
}

function fishBucket (){
    if(startTime === 12){
        catchOfDay.pop()
        return outOfTime()
    }
    if(combinedWeight() > 10){
        console.log("Sorry We have to release that fish buddy, it will put you over the 10lbs max")
        catchOfDay.pop()
    }
    console.log("===========================")
    console.log("The time is " + '' + startTime + ' ' + 'am')
    //console.log("Toss this fish in the bucket!!!")
    //console.log(keptFish)
    console.log('You have' + " " + combinedWeight() + 'lbs' + " "+ 'of fish ' )
    return keptFish()

// ## Step 6: Keeping track of time
// The user should only be allowed to fish for six hours.  
// create a variable that stores the hour (`let hour = 6`).

function outOfTime(){
    console.log(":(:(:(:(::(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(:(")
    console.log("Sorry time is up! It is after 12pm")
    console.log(" You caught" + " " + combinedWeight() + ("lbs of fish") + " " + "$" + " " + sumOfValue())
    console.log(catchOfDay)
}
}

