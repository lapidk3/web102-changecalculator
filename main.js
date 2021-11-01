// Write your JavaScript here
// Variables used throughout the file
const AMOUNT = "amount-due";
const TENDER = "amount-received";
var change = [
    ["hundreds", 0],
    ["fiftys", 0],
    ["twentys", 0],
    ["tens", 0],
    ["fives", 0],
    ["twos", 0],
    ["ones", 0],
    ["quarters", 0],
    ["dimes", 0],
    ["nickels", 0],
    ["pennies", 0]
];
let HUNDREDS = 0;
let FIFTYS = 1;
let TWENTYS = 2;
let TENS = 3;
let FIVES = 4;
let TWOS = 5;
let ONES = 6;
let QUARTERS = 7;
let DIMES = 8;
let NICKELS = 9;
let PENNIES = 10;


/**
 * This is a function that will clear the change calculator each time
 * the user wants to calculate change for a new transaction
 */
 function clear() {
    change.forEach(function(theAmnt) {
        theAmnt[1] = 0;
        let newAmnt = document.getElementById(theAmnt[0]);
        newAmnt.textContent = theAmnt[1];
     });
}


/**
 * This is a function that will read user input and calculate the
 * amount of change they need. It will return the optimal sequence
 * of change to give the customer and then display that on the 
 * calculator.
 */
 function calculateChange() {
    // First clear out any previous values from our array
    clear();

    // Grab user input values and figure out the amount of change they need
    var saleAmnt = document.getElementById(AMOUNT).value;
    var tendr = document.getElementById(TENDER).value;
    var reqChange = (tendr - saleAmnt).toFixed(2);
    var coins = (reqChange - Math.floor(reqChange)).toFixed(2);
    coins *= 100;
    coins = Math.round(coins);
    reqChange = Math.floor(reqChange);


    // Calculate the optimal sequence of bills needed for change
    while(reqChange > 0){
        if(reqChange >= 100) {
            change[HUNDREDS][1] = Math.floor(reqChange/100);
            reqChange = reqChange % 100;
        } else if(reqChange >= 50) {
            change[FIFTYS][1] = Math.floor(reqChange/50);
            reqChange = reqChange % 50;
        } else if(reqChange >= 20) {
            change[TWENTYS][1] = Math.floor(reqChange/20);
            reqChange = reqChange % 20;
        } else if(reqChange >= 10) {
            change[TENS][1] = Math.floor(reqChange/10);
            reqChange = reqChange % 10;
        } else if(reqChange >= 5) {
            change[FIVES][1] = Math.floor(reqChange/5);
            reqChange = reqChange % 5;
        } else if(reqChange >= 2) {
            change[TWOS][1] = Math.floor(reqChange/2);
            reqChange = reqChange % 2;
        } else {
            change[ONES][1] = Math.floor(reqChange/1);
            reqChange = reqChange % 1;
        }
    }

    //Calculate the optional sequence of coins needed for change
    while(coins > 0) {
        if(coins >= 25) {
            change[QUARTERS][1] = Math.floor(coins/25);
            coins = coins % 25;
        } else if(coins >= 10) {
            change[DIMES][1] = Math.floor(coins/10);
            coins = coins % 10;;
        } else if(coins >= 5) {
            change[NICKELS][1] = Math.floor(coins/5);
            coins = coins % 5;
        } else {
            change[PENNIES][1] = Math.floor(coins/1);
            coins = coins % 1;
        }
    }

     // Update the new values on the html document
     change.forEach(function(theAmnt) {
        let newAmnt = document.getElementById(theAmnt[0]);
        newAmnt.textContent = theAmnt[1];
     });
}

