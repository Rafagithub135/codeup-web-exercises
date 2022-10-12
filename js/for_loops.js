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
    let randomNumber = Math.floor(Math.random() * 201);
    function getRandomNumber(20, 201) {
        for(let i = 1; i <= 10; i++) {



    }


})();