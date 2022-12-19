"use strict";
(function () {
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


        // function analyzeColor(inputColor) {
        //     if (inputColor === 'red') {
        //         return 'Most fire trucks are red';
        //     } else if (inputColor === 'blue') {
        //         return 'The ocean, looked at from a distance seems to be blue.';
        //     } else if (inputColor === 'yellow') {
        //         return 'The sun is yellow';
        //     } else if (inputColor === 'white') {
        //         return 'Snow is white.';
        //     } else if (inputColor === 'green') {
        //         return 'Green is the color of grass.';
        //     } else {
        //         inputColor + ' is not a color available.  Please try another color.';
        //      }
        // }

        // console.log(analyzeColor('red'));
        // console.log(analyzeColor('blue'));
        // console.log(analyzeColor('yellow'));
        // console.log(analyzeColor('white'));
        // console.log(analyzeColor('green'));


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
//     let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
//     let randomColor = colors[Math.floor(Math.random() * colors.length)];


    /**
     * TODO:
     * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
     * You should see a different message every time you refresh the page
     */

    // console.log(analyzeColor(randomColor));

    /**
     * TODO:
     * Comment out the code above, and refactor your function to use a switch-case statement
     */

    // function analyzeColor(inputColor) {
    //     switch (inputColor) {
    //         case 'red':
    //             return 'Most fire trucks are red';
    //         case 'blue':
    //             return 'The ocean, looked at from a distance seems to be blue.';
    //         case 'yellow':
    //             return 'The sun is yellow';
    //         case 'white':
    //             return 'Snow is white.';
    //         case 'green':
    //             return 'Green is the color of grass.';
    //         default:
    //             inputColor + ' is not a color available.  Please try another color.';
    //     }
    // }

    // console.log(analyzeColor('red'));
    // console.log(analyzeColor('blue'));
    // console.log(analyzeColor('yellow'));
    // console.log(analyzeColor('white'));
    // console.log(analyzeColor('green'));

    /**
     * TODO:
     * Prompt the user for a color when the page loads, and pass the input from the
     * user to your `analyzeColor` function. Alert the return value from your
     * function to show it to the user.
     */

    // let colorName = prompt('Enter a color: ').toLowerCase();

    // alert(analyzeColor(colorName));

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

    // function calculateTotal(luckyNum, totalAmount) {
    //     if (luckyNum === 0) {
    //         return "$" + totalAmount.toFixed(2);
    //     } else if (luckyNum === 1) {
    //         return "$" + (totalAmount * .9).toFixed(2);
    //     } else if (luckyNum === 2) {
    //         return "$" + (totalAmount * .75).toFixed(2);
    //     } else if (luckyNum === 3) {
    //         return "$" + (totalAmount * .65).toFixed(2);
    //     } else if (luckyNum === 4) {
    //         return "$" + (totalAmount * .5).toFixed(2);
    //     } else
    //         return 'Congratulations, your bill is $0.00 today!!!'
    // }

    // console.log(calculateTotal(0, 100));
    // console.log(calculateTotal(1,100));
    // console.log(calculateTotal(2,100));
    // console.log(calculateTotal(3,100));
    // console.log(calculateTotal(4,100));
    // console.log(calculateTotal(5,100));

    /**
     * TODO:
     * Uncomment the line below to generate a random number between 0 and 5.
     * (In this line of code, 0 is inclusive, and 6 is exclusive)
     * Prompt the user for their total bill, then use your `calculateTotal` function
     * and alerts to display to the user what their lucky number was, what their
     * price before the discount was, and what their price after the discount is.
     */
// Generate a random number between 0 and 6
// let luckyNumber = Math.floor(Math.random() * 6);
// let totalBill = prompt('What was your total bill today?');

// calculateTotal(luckyNumber, totalBill);
// switch (luckyNumber) {
//     case 0:
//         alert('Your lucky number is 0. Sorry, your number didn\'t produce a discount.  Your total bill today is $' + totalBill + '.');
//         break;
//     case 1:
//         alert('Your lucky number is 1.Congratulations, your lucky number gave you a 10% discount today. Your previous bill today was $' + totalBill + ' and your bill after your discount is $' + totalBill - (totalBill * .9));
//         break;
//     case 2:
//         alert('Your lucky number is 2. Congratulations, your lucky number gave you a 25% discount today. Your previous bill today was $' + totalBill + ' and your bill after your discount is $' + totalBill - (totalBill * .75));
//         break;
//     case 3:
//         alert('Your lucky number is 3. Congratulations, your lucky number gave you a 35% discount today. Your previous bill today was $' + totalBill + ' and your bill after your discount is $' + totalBill - (totalBill * .65));
//         break;
//     case 4:
//         alert('Your lucky number is 4. Congratulations, your lucky number gave you a 50% discount today. Your previous bill today was $' + totalBill + ' and your bill after your discount is $' + totalBill - (totalBill * .5));
//         break;
//     case 5:
//         alert('Your lucky number is 5. Congratulations, your lucky number gives you a 100% discount.  Your items were $' + totalBill + ', but due to your lucky number, your items are free today.  Enjoy your day and thank you for shopping at Wally World');
// }
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

    // function userNumber() {
    //     if (confirm('Would you like to enter a number? Click "OK" for yes or "Cancel" for no.')) {
    //         let enteredNumber = parseInt(prompt('Please enter a number: '));
    //         if (!isNaN(enteredNumber)) {
    //             alert('Your number plus 100 is ' + (parseFloat(enteredNumber) + 100));
    //             alert(enteredNumber >= 0 ? "Your number is positive." : "Your number is negative.");
    //             alert(enteredNumber % 2 === 0 ? "Your number is even." : "Your number is odd.");
    //         } else {
    //             alert('That is the incorrect type of data! That is a/an ' + typeof someNumber);
    //         }
    //     }
    // }

    // userNumber();

})();