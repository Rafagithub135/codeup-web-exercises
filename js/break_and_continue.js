"use strict";
(function() {

    let input = prompt('Enter an odd number between 1 and 50: ');
    while(true) {
        if (input % 2 === 0  || input > 50 || input < 1) {
            alert('You have entered an invalid number.  Please try again.');
            prompt('Please enter an ODD number BETWEEN 1 and 50.')
        } else {
            break;
        }
    }

    console.log('Number to skip is: ' + input);
    for(let num = 1; num <= 50; num++) {
        if(num % 2 === 1 && num != input) {
            console.log('Here is an odd number: ' + num);
        } if(num === input){
            console.log('Yikes! Skipping number ' + input);
            continue;
        }
        if(num > 50) {
            break;
        }
    }

})();