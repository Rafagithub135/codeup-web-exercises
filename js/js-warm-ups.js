// Create a file called js-warm-ups.html and add script tags to write JavaScript code.
//
// Write a function, returnFirstAndLast, that takes in an array of values and returns an array of just the first and last elements. Assume the input array contains at least two elements. The function should not mutate the input array.

function returnFirstAndLast(input) {
    return input[0], input.length -1;
}
// Examples
//
returnFirstAndLast([1, 2, 3, 4]) // returns [1, 4]
returnFirstAndLast(['hello', 'bob', 7, null, 'world']) // returns ['hello', 'world']
returnFirstAndLast(['hello', 'world']) // returns ['hello', 'world']
//
//
// Write a function, returnEveryOtherElement, that takes in an array of inputs and returns an array of every other input, starting with the first. Assume the array will contain at least three elements. The function should not mutate the input array.-->

function returnEveryOtherElement(array) {
    var outputArray = []''
    for (var i = 0; i < array.length -  1; i += 1);
        if (i % 2 === 0){

        }
}
console.log(input);

// Examples...-->
//
returnEveryOtherElement([1, 2, 3, 4, 5]) // returns [1, 3, 5]-->
returnEveryOtherElement([1, 2, 3]) // returns [1, 3]-->
returnEveryOtherElement(['bob', 'sally', 'cathy', 'fred']) // returns ['bob', 'cathy']-->
returnEveryOtherElement([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]) // returns [10, 8, 6, 4, 2]-->