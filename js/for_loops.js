(function() {


/* 2. Create a function named showMultiplicationTable that accepts a number and console.logs
    the multiplication table for that number (just multiply by the numbers 1 through 10).
*/
    function showMultiplicationTable(num) {
        for(let i = 1; i <= 10; i++) {
            let total = i * num;
            console.log(num + " x " + i + " = " +(num * i));
        }
    }

    console.log(showMultiplicationTable(15));

/* 3. Use a for loop and the code from the previous lessons to generate 10 random numbers
    between 20 and 200 and output to the console whether each number is odd or even.
 */

    function getRandomInteger(min, max) {
        let randomNumber;
        min = Math.ceil(min);
        max = Math.floor(max);
        randomNumber = Math.floor(Math.random() * (max - min) + min);
        for(let i = 1; i <= 10; i++) {
            if (randomNumber % 2 === 0) {
                console.log(randomNumber + ' is even.')
            } else
                console.log(randomNumber + ' is odd.')
        }
    }


})();