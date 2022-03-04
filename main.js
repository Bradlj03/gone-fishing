//## Step 1 creating  the foundation if the game
//## Game will will require npm install prompt sync
//## add prompt sync

const prompt = require("prompt-sync")();

// Create an the following arrays to hold the folloing information
// Time, fish caught, and fish kept
// kept fish will be a function

startTime = 6; 
catchOfDay = []
keptFish()

//## Step 1a Create a loop to play the came:
// Create a function that will run through the other functions created
// What is the object of the function? To catch and release fish
// but more importantly to keep the fish. 

function keptFish(){
    console.log("There is a tug on your Line!!!")// This will be the first statement consoled to the user
    console.log("Yove' caught a fish!!!")
    // the game wants you to display a fish to the user prior to the prompt to keep or release
    let fish = randomFish() // By creating this variable you are know ensuring a random fish is always generated
    console.log(fish)
    // prompt user

    decide = Number(prompt("Please Enter [1] to keep fish or [2] to release fish. >>>"))

    console.log("\n")


    
        if (decide === 1){
            catchOfDay.push(fish)
            startTime++
            return fishBucket()
        }
        if( startTime === 12 ){
            return outOfTime()
        }
        if(decide === 2){
            startTime++
            return fishBucket()
        }

}






//## Step two create randon fish
// A random fish will need a randomly generated name that consists 
// of two adjectives and a fish-type (i.e.: 'Blue-finned Surface Perch')
// The first array should contain fish adjectives.
// The second array should contain different fish adjectives. 
// The third array should contain types of fish. Each array should
// have at least 10 values in it.

function randomFishCreator(){
    fishAdj1 = ['Large', 'Small', 'Great', 'Elusive', 'Peppered', 'Salty', 'Common', 'Electric', 'Spotted', 'Tiny', 'Striped', 'Majestic', 'Heavenly', 'Ghostly', 'Ancient', 'Ol', 'Dainty',  'Royal'];
    fishAdj2 = ['Blue', 'Yellow', 'Brown', 'White', 'Purple', 'Red', 'Black', 'Tan', 'Orange', 'Green', 'Pink', 'Gray', 'Amber', 'Scarlet', 'Copper', 'Golden', 'Silver', 'Bronze', 'Rose', 'Rust', 'Sapphire', 'Maroon'];
    fishType = ['Trout', 'Tuna', 'Salmon', 'Bass', 'Carp', 'Cod', 'Flounder', 'Snapper', 'Grouper', 'Haddock', 'Halibut', 'Herring', 'Mackerel', 'Marlin', 'Mullet', 'Perch', 'Tilapia', 'Walleye'];
    let mixAndMatchFish = fishAdj1[Math.floor(Math.random()*fishAdj1.length)] + " " + fishAdj2[Math.floor(Math.random()* fishAdj2.length)] + fishType[Math.floor(Math.random()* fishType.length)];
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

function combinedWeight(){
    let sum = 0;
    for (let i = 0; i < catchOfDay.length; i++) {
        sum = sum + catchOfDay[i].weight;
         
    }
    return sum
}
//## Generate random fish value
function randomValue(min, max){
    let value = (Math.ceil(Math.random()* 1000)/100);
    return (value );
}

function totalValue(){
    let sum = 0;
    for (let i = 0; i < catchOfDay.length; i++) {
        sum = sum + catchOfDay[i].value;
        
    }
    return sum;

}

// Create a fish bucket that will hold the fish

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
    console.log(`You caught ${catchOfDay.length} fish, for a total weight of ${combinedWeight()} lbs and a total value of $${totalValue()}.`)
    return keptFish()}

function outOfTime(){
    console.log("=======================================")
    console.log("Sorry time is up! Unfortuantely it is after 12pm")
    console.log(`You caught ${catchOfDay.length} fish, for a total weight of ${combinedWeight()} lbs and a total value of $${totalValue()}.`)
    console.log(catchOfDay)
}