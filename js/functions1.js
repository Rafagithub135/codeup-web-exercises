"use strict";
(function () {
    /**
     * TODO:
     * Create a function called 'sayHello' that takes a parameter 'name'.
     * When called, the function should return a message that says hello to the passed in name.
     *
     * Example
     * > sayHello("codeup") // returns "Hello, codeup!"
     */


    function sayHello(name) {
        return "Hello, " + name + "!";
    }

    console.log(sayHello("Ralph"));

    /**
     * TODO:
     * Call the function 'sayHello' and pass your name as a string literal argument.
     * Store the result of the function call in a variable named 'helloMessage'.
     *
     * console.log 'helloMessage' to check your work
     */

    sayHello('Ralph');
    let helloMessage = sayHello('Ralph');

    console.log(helloMessage);

    /**
     * TODO:
     * Store your name as a string in a variable named 'myName', and pass that
     * variable to the 'sayHello' function. You should see the same output in the
     * console.
     */

    let myName = 'Ralph'
    console.log(sayHello(myName));

    // Don't modify the following line, it generates a random number between 1 and 3
    // and stores it in a variable named random

    let random = Math.floor((Math.random() * 3) + 1);

    /**
     * TODO:
     * Create a function called 'isTwo' that takes a number as a parameter.
     * The function should return a boolean value based on whether or not the passed
     * number is the number 2.
     *
     * Example
     * > isTwo(1) // returns false
     * > isTwo(2) // returns true
     * > isTwo(3) // returns false
     *
     * Call the function 'isTwo' passing the variable 'random' as a argument.
     *
     * console.log *outside of the function* to check your work (you should see a
     * different result everytime you refresh the page if you are using the random
     * number)
     */

    function isTwo(num) {
        return num === 2;
    }

    console.log(isTwo(random));

    /**
     * TODO:
     * Create a function named 'calculateTip' to calculate a tip on a bill at a
     * restaurant. The function should accept a tip percentage and the total of the
     * bill, and return the amount to tip
     *
     * Examples:
     * > calculateTip(0.20, 20) // returns 4
     * > calculateTip(0.25, 25.50) // returns 6.375
     * > calculateTip(0.15, 33.42) // returns 5.013
     */

    function calculateTip(tipPercentage, totalBill) {
        return tipPercentage * totalBill.toFixed(2);
    }

    console.log(calculateTip(.2, 20));

    /**
     * TODO:
     * Use prompt and alert in combination with your calculateTip function to
     * prompt the user for the bill total and a percentage they would like to tip,
     * then display the dollar amount they should tip
     */

    // let totalBill = parseFloat(prompt('How much is the total bill?'));
    // let tipPercentage = parseFloat(prompt('How much would you like to tip?'));

    // alert(calculateTip(tipPercentage, totalBill).toFixed(2));

    /**
     * TODO:
     * Create a function named `applyDiscount`. This function should accept a price
     * (before a discount is applied), and a discount percentage (a number between 0
     * and 1). It should return the result of applying the discount to the original
     * price.
     *
     * Example:
     * > var originalPrice = 100;
     * > var discountPercent = .2; // 20%
     * > applyDiscount(originalPrice, discountPercent) // 80
     *
     * > applyDiscount(45.99, 0.12) // 40.4712
     */

    // function applyDiscount(price, discountPercent) {
    //     return price - (price * discountPercent);
    // }

    // console.log(applyDiscount(100, .15));

    /* ########################################################################## */

    /**
     * TODO:
     * Create a function named `analyzeColor` that accepts a string that is a color
     * name as input. This function should return a message which relates to the
     * color stated in the argument of the function. For colors you do not have
     * responses written for, return a string stating so
     *
     * Example:
     *  > analyzeColor('blue') // returns "blue is the color of the sky"
     *  > analyzeColor('red') // returns "Strawberries are red"
     *
     *
     *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
     *
     * You should use an if-else-if-else block to return different messages.
     *
     * Test your function by passing various string literals to it and
     * console.logging the function's return value
     */

    function analyzeColor(input) {
        if (input === 'red' || input === 'Red') {
            return 'Hot embers can be red.';
        } else if (input === 'blue' || input === 'Blue') {
            return 'Oceans looked at from a distance appear blue.';
        } else if (input === 'yellow' || input === 'Yellow') {
            return 'The sun is bright yellow.';
        } else if (input === 'orange' || input === 'Orange') {
            return 'Amber gemstones are actually orange.';
        } else if (input === 'white' || input === 'White') {
            return 'Snow is white.';
        } else
            return 'You have chosen a color that is not available.  Please choose again.';
    }

    console.log(analyzeColor(prompt('Please enter a color: ')));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
    let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    /**
     * TODO:
     * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
     * You should see a different message every time you refresh the page
     */

    console.log(analyzeColor(randomColor));

    /**
     * TODO:
     * Comment out the code above, and refactor your function to use a switch-case statement
     */

    let analyzeColor1 = prompt('What color do you choose?');

    switch (analyzeColor1) {
        case 'red':
            alert('Hot embers can be red');
            break;
        case 'blue':
            alert('Oceans looked at from a distance appear blue.');
            break;
        case 'yellow':
            alert('The sun is bright yellow.');
            break;
        case 'orange':
            alert('Amber gemstones are actually orange.');
            break;
        case 'white':
            alert('Snow is white.');
            break;
        default:
            alert(+analyzeColor + ' is not available.  Please choose another color.');
            break;
    }

    /**
     * TODO:
     * Prompt the user for a color when the page loads, and pass the input from the
     * user to your `analyzeColor` function. Alert the return value from your
     * function to show it to the user.
     */

    let newColor = prompt('What color would you like to discuss?');

    analyzeColor(newColor)
    alert('You chose ' + newColor + '.');

    /* ########################################################################## */

    /**
     * TODO:
     * Suppose there's a promotion in Walmart, each customer is given a randomly
     * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
     * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
     * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
     * everything for free!.
     *
     * Write a function named `calculateTotal` which accepts a lucky number and total
     * amount, and returns the discounted price.
     *
     * Example:
     * calculateTotal(0, 100) // returns 100
     * calculateTotal(4, 100) // returns 50
     * calculateTotal(5, 100) // returns 0
     *
     * Test your function by passing it various values and checking for the expected
     * return value.
     */

    function calculateTotal(num, totAmount) {
        if (num === 0) {
            return totAmount * 1;
        } else if (num === 1) {
            return totAmount * .9;
        } else if (num === 2) {
            return totAmount * .75;
        } else if (num === 3) {
            return totAmount * .65;
        } else if (num === 4) {
            return totAmount * .5;
        } else if (num === 5) {
            return 0;
        } else
            return 'You have entered an invalid number';
    }

    console.log(calculateTotal(2, 100));


    /**
     * TODO:
     * Uncomment the line below to generate a random number between 0 and 5.
     * (In this line of code, 0 is inclusive, and 6 is exclusive)
     * Prompt the user for their total bill, then use your `calculateTotal` function
     * and alerts to display to the user what their lucky number was, what their
     * price before the discount was, and what their price after the discount is.
     */
// Generate a random number between 0 and 6
    let luckyNumber = Math.floor(Math.random() * 6);

    let totAmount = prompt('Please enter your total bill: ');
    calculateTotal(luckyNumber, totAmount);
    alert('Your lucky number is ' + luckyNumber + '.');
    alert('Your original price was ' + totAmount + '.');

    /**
     * TODO:
     * Write some JavaScript that uses a `confirm` dialog to ask the user if they
     * would like to enter a number. If they click 'Ok', prompt the user for a
     * number, then use 3 separate alerts to tell the user:
     *
     * - whether the number is even or odd
     * - what the number plus 100 is
     * - if the number is negative or positive
     *
     * Do *NOT* display any of the above information
     * if the user enters a value that is not of the number data type.
     * Instead, use an alert to inform them of the incorrect input data type.
     *
     *
     * Can you refactor your code to use functions?
     * HINT: The way we prompt for a value could be improved
     */

    confirm('Would you like to enter a number? Click "OK" for yes or "Cancel" for no.');
    let luckyNum = parseFloat(prompt('Please enter a number.'));
    if (luckyNum % 2 === 0) {
        alert('Your number is even!!!');
    } else
        alert('Your number is odd!!!');
    alert('Your number plus 100 is ' + parseFloat(+ luckyNum + + Number(100)));
    if (luckyNum >= 0) {
        alert('Your number is positive.');
    } else
        alert('Your number is negative.');
        alert('Your number is odd');

})();