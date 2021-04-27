// Code your solution in this file!
// First, Scuber's executives want to ensure that Scuber's headquarters is near its customers. They would like you to write a function that takes in a pickup location for a passenger, and returns the number of blocks from its headquarters on 42nd Street. For example, if the pickup location is 50 (i.e., 50th Street), the return value should be 8. The function's return value can then be used for another function that translates the number of blocks from headquarters to the distance in feet.

// Second, customers want Scuber to calculate the number of feet travelled based on the distance. Write a function called distanceTravelledInFeet that takes in the beginning and destination blocks and returns the number of feet travelled. Each block in Manhattan is 264 feet long. For example distanceTravelledInFeet(34, 38) representing 34th St to 38th St, returns 1056 ((38-34)*264). You can assume that we are only calculating distance uptown/downtown, not from river to river.
// The first describe statement, describe('index.js', function(), tells us the file being tested. Here, it's the index.js file.
// Our second describe statement, describe('distanceFromHqInBlocks()', function(), lets us know what the name of our function is. In this case, our test is expecting to find a function called distanceFromHqInBlocks().
// Our third statement, it('returns a distance in blocks', function(), describes what our function is doing. In this case, we're going to be calculating some kind of distance.
// Finally, our last statement, expect(distanceFromHqInBlocks(43)).to.equal(1), tells us what our test is expecting the result to be. There are a couple really important clues here. Our first one is the 43. That tells us that our function is expecting an argument to be passed in, so we'll need to specify some kind of variable. Our other clue is the 1, because that tells us what the result is. If we're passing in 43, we're expecting our function to calculate that it's 1 block from headquarters.
// Try reading through all of the tests first, before you write any code! It will help you decide how to structure your code in the cleanest and most efficient manner.

// To complete all of your work assignments, you'll need to write four functions:

// distanceFromHqInBlocks: Returns the number of blocks from Scuber's headquarters to the pickup location.
function distanceFromHqInBlocks(street){
    const hq = 42;
    if(street > hq){
        return street - hq;
    }else{
        return hq - street;
    }   
}

// Use the value returned by distanceFromHqInBlocks to calculate feet
// 1block = 264 feet
function distanceFromHqInFeet(street){
    //distanceFromHqInFeet please calculate blocks for distanceFromHqInFeet
    return distanceFromHqInBlocks(street) * 264; // 1
}

function distanceTravelledInFeet(str1, str2){
    return Math.abs(str1 - str2) * 264;
}

function calculatesFarePrice(start, destination){
    let price;
    let distanceInFeet = distanceTravelledInFeet(start, destination);
    // The first four hundred feet are free
    if(distanceInFeet <= 400){
        return 0;
    }//between 400 and 2000 feet, the price is 2 cents per foot (not including 400, which are free!)
    else if(distanceInFeet > 400  && distanceInFeet < 2000){
        price = (distanceInFeet - 400) * 0.02;
        return price;
    }// Then Scuber charges a flat fare for a distance over 2000 feet and under 2500 feet.
    else if(distanceInFeet > 2000 && distanceInFeet < 2500){
        return 25;
    }else{
        return 'cannot travel that far';
    }

    // Scuber does not allow any rides over 2500 feet — the function returns 'cannot travel that far' if a ride over 2500 feet is requested.
}