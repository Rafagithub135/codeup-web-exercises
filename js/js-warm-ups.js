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
//
// function returnEveryOtherElement(array) {
//     var outputArray = []''
//     for (var i = 0; i < array.length -  1; i += 1);
//         if (i % 2 === 0){
//
//         }
// }
// console.log(input);

// Examples...-->
//
// returnEveryOtherElement([1, 2, 3, 4, 5]) // returns [1, 3, 5]-->
// returnEveryOtherElement([1, 2, 3]) // returns [1, 3]-->
// returnEveryOtherElement(['bob', 'sally', 'cathy', 'fred']) // returns ['bob', 'cathy']-->
// returnEveryOtherElement([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]) // returns [10, 8, 6, 4, 2]-->
//
// // 4-26
// // Write a javascript function that takes in a string, and returns the string in alphabetical order.
//
// function abcString(str) {
//     var strArray = str.split('');
//     var alphaOrder = strArray.sort();
//     var result = alphaOrder.join('');
//     return result;
// }

// console.log("glasses hat xray baseball")

// 4-27

// var lowest
// var highest
// function createNumObject(x, y) {
//   if (x >= y) {
//   return {
//       lowest: y,
//       highest: x
//   }
//   } else if (x < y) {
//       return {
//           lowest: x,
//           highest: y
//       }
//   }
// }
//
// console.log(createNumObject(1, 2), {lowest: 1, highest: 2});
// console.log(createNumObject(5, 2), {lowest: 2, highest: 5});
// console.log(createNumObject(5, 5), {lowest: 5, highest: 5});

// 5/4

// Consider an array of product objects:
// const products - [


// 5-9

// Write a function that accepts an array of numbers and returns the average.
//
// var sumArray = 0;
// function arrayAverage(array) {
//     for (var i = 0; i < array.length; i++){
//         sumArray += array[i];
//     }
//     return  sumArray / array.length;
// }
//
// console.log([0, 3, 5, 6, 21]);
// console.log([0, 3, 5, 7, 10]);

// 5-10
//
// let classes = [
//     {class: "6th grade history", students: 18},
//     {class: "7th grade history", students: 20},
//     {class: "8th grade history", students: 22},
// ]
//
// function totalStudents() {
//     var total = 0;
//     for (var i = 0; i < classes.length; i++) {
//         total += classes[i].students;
//     }
//     return total;
// }
//
// var max = 0
// function maxStudents() {
//     for (var i = 0; i < classes.length; i++) {
//         if (max < classes[i].students) {
//             max = classes[i].students;
//         }
//     }
// }

// 5-11

// Write a function called convertToObject that takes in a string that is the name of a class, and a number that is the number of students, and returns an object with the properties 'class' and 'students'.

function convertToObject(str, num) {
    return {class: str, number: num};
}
console.log('class', 22)
console.log('class', 35)

// Write a function that takes a neighborhood object and determines if it is desirable.  A neighborhood is desirable if the  median home price is less than 300000, crime rates are low, and teh total rating of schools is at least 24.

var neighborhood1 = {
    neighborhood: "Lovely Estates",
    medianHomePrice: 280000,
    pool: true,
    tennis: false,
    crimeRate: "low",
    schools: [
        {name: "es1", rating: 8},
        {name: "ms2", rating: 6},
        {name: "hs3", rating: 8}
    ]
}

var neighborhood1 = {
    neighborhood: "Luminous Estates",
    medianHomePrice: 270000,
    pool: true,
    tennis: false,
    crimeRate: "low",
    schools: [
        {name: "es1", rating: 8},
        {name: "ms2", rating: 8},
        {name: "hs3", rating: 8}
    ]
}

var neighborhood1 = {
    neighborhood: "Ginormous Ego Estates",
    medianHomePrice: 350000,
    pool: true,
    tennis: true,
    crimeRate: "low",
    schools: [
        {name: "es1", rating: 9},
        {name: "ms2", rating: 9},
        {name: "hs3", rating: 9}
    ]
}

function isDesirable(neighborhoodObject) {
    var totalRating = 0;
    for (i = 0; i < neighborhoodObject) {
        totalRating += neighborhoodObject.schools[i].rating;
    }
    return neighborhoodObject.medianHomePrice < 300000 && neighborhoodObject.crimeRate === "low" && totalRating >= 24;
}

