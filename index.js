// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
 */

function logStr(string) {
    return string + string
}

function processFirstItem(stringList, callback) {

    return callback(stringList[0])


}



console.log(processFirstItem(['foo', 'bar'], logStr))

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * counter 2 uses a global scope, countermaker has a local scope and a nested 
 * function which is assigned to counter1 variable which calls the nested function everytime
 * its called it increments by 1.. counter2 needs to take a parameter to
 * 
 * 
 * 2. Which of the two uses a closure? How can you tell?  counterMaker uses closure because
 * the nested function has the ability to reach outwards and grab the count variable thus creating a closure. 
 * Counter2 also has a closure because when return count is being called it has to reach outside to 
 * access the count variable
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * counter1 would be easy to invoke as a callback function 
 * and avoid race condition(avoid multiple functions calling it and corrupting the results)
 * counter2 would be useful to keep track of how many times that function is being called.. 
 * 
 * 
 *
 */

// counter1 code
function counterMaker() { //a scope
    let count = 0;
    return function counter() { //a closure
        count++; // a closure  count is not defined inside this function
    }
} // a scope



const counter1 = counterMaker();
console.log(counter1())

// counter2 code
let count = 0;

function counter2() {
    return count++;
}
console.log(counter2())


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning() {
    points = Math.floor(Math.random() * 3)
    return points

}

// console.log(inning());



/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
"Home": 11,
"Away": 5,
}

*/

function finalScore(inning, number) {
    let home = 0;
    let away = 0;

    for (let i = 0; i < number; i++) {
        home = home + inning(); /// assigning values to my keys each iteration
        away = away + inning();
    }

    return { "Home": home, "Away": away }

}
// finalScore(inning, 5)
// finalScore(inning, 9)

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam

Final Score: awayTeam - homeTeam */



function scoreboard(getInningScorecallback, inning, numberOfinn) {

    let theScore = {
        "HomeTeam": 0,
        "AwayTeam": 0
    }

    for (let i = 1; i < numberOfinn; i++) {
        theScore.AwayTeam += inning();
        theScore.HomeTeam += inning(); /// incrementing values of my math.random to my keys


        getInningScorecallback(i, theScore); // calling my callbackfuntion with the results of each game
    }
    return theScore // return final score of the game

}




function whoWon(inning, theScore) {

    if (inning === 1) {
        console.log(inning + "st inning: " + theScore.AwayTeam + " - " + theScore.HomeTeam);
    } else if (inning === 2) {
        console.log(inning + "nd inning: " + theScore.AwayTeam + " - " + theScore.HomeTeam);
    } else if (inning === 3) {
        console.log(inning + "rd inning: " + theScore.AwayTeam + " - " + theScore.HomeTeam);
    } else {
        console.log(inning + "th inning: " + theScore.AwayTeam + " - " + theScore.HomeTeam);
    }
}

scoreboard(whoWon, inning, 10);