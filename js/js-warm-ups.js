// // Create a file called js-warm-ups.html and add script tags to write JavaScript code.
// //
// // Write a function, returnFirstAndLast, that takes in an array of values and returns an array of just the first and last elements. Assume the input array contains at least two elements. The function should not mutate the input array.
//
// // function returnFirstAndLast(input) {
// //     return input[0], input.length -1;
// // }
// // // Examples
// // //
// // returnFirstAndLast([1, 2, 3, 4]) // returns [1, 4]
// // returnFirstAndLast(['hello', 'bob', 7, null, 'world']) // returns ['hello', 'world']
// // returnFirstAndLast(['hello', 'world']) // returns ['hello', 'world']
// //
// //
// // Write a function, returnEveryOtherElement, that takes in an array of inputs and returns an array of every other input, starting with the first. Assume the array will contain at least three elements. The function should not mutate the input array.-->
// //
// // function returnEveryOtherElement(array) {
// //     var outputArray = []''
// //     for (var i = 0; i < array.length -  1; i += 1);
// //         if (i % 2 === 0){
// //
// //         }
// // }
// // console.log(input);
//
// // Examples...-->
// //
// // returnEveryOtherElement([1, 2, 3, 4, 5]) // returns [1, 3, 5]-->
// // returnEveryOtherElement([1, 2, 3]) // returns [1, 3]-->
// // returnEveryOtherElement(['bob', 'sally', 'cathy', 'fred']) // returns ['bob', 'cathy']-->
// // returnEveryOtherElement([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]) // returns [10, 8, 6, 4, 2]-->
// //
// // // 4-26
// // // Write a javascript function that takes in a string, and returns the string in alphabetical order.
// //
// // function abcString(str) {
// //     var strArray = str.split('');
// //     var alphaOrder = strArray.sort();
// //     var result = alphaOrder.join('');
// //     return result;
// // }
//
// // console.log("glasses hat xray baseball")
//
// // 4-27
//
// // var lowest
// // var highest
// // function createNumObject(x, y) {
// //   if (x >= y) {
// //   return {
// //       lowest: y,
// //       highest: x
// //   }
// //   } else if (x < y) {
// //       return {
// //           lowest: x,
// //           highest: y
// //       }
// //   }
// // }
// //
// // console.log(createNumObject(1, 2), {lowest: 1, highest: 2});
// // console.log(createNumObject(5, 2), {lowest: 2, highest: 5});
// // console.log(createNumObject(5, 5), {lowest: 5, highest: 5});
//
// // 5/4
//
// // Consider an array of product objects:
// // const products - [
//
//
// // 5-9
//
// // Write a function that accepts an array of numbers and returns the average.
// //
// // var sumArray = 0;
// // function arrayAverage(array) {
// //     for (var i = 0; i < array.length; i++){
// //         sumArray += array[i];
// //     }
// //     return  sumArray / array.length;
// // }
// //
// // console.log([0, 3, 5, 6, 21]);
// // console.log([0, 3, 5, 7, 10]);
//
// // 5-10
// //
// // let classes = [
// //     {class: "6th grade history", students: 18},
// //     {class: "7th grade history", students: 20},
// //     {class: "8th grade history", students: 22},
// // ]
// //
// // function totalStudents() {
// //     var total = 0;
// //     for (var i = 0; i < classes.length; i++) {
// //         total += classes[i].students;
// //     }
// //     return total;
// // }
// //
// // var max = 0
// // function maxStudents() {
// //     for (var i = 0; i < classes.length; i++) {
// //         if (max < classes[i].students) {
// //             max = classes[i].students;
// //         }
// //     }
// // }
//
// // 5-11
//
// // Write a function called convertToObject that takes in a string that is the name of a class, and a number that is the number of students, and returns an object with the properties 'class' and 'students'.
//
// // function convertToObject(str, num) {
// //     return {class: str, number: num};
// // }
// // console.log('class', 22)
// // console.log('class', 35)
//
// // Write a function that takes a neighborhood object and determines if it is desirable.  A neighborhood is desirable if the  median home price is less than 300000, crime rates are low, and teh total rating of schools is at least 24.
//
// // var neighborhood1 = {
// //     neighborhood: "Lovely Estates",
// //     medianHomePrice: 280000,
// //     pool: true,
// //     tennis: false,
// //     crimeRate: "low",
// //     schools: [
// //         {name: "es1", rating: 8},
// //         {name: "ms2", rating: 6},
// //         {name: "hs3", rating: 8}
// //     ]
// // }
// //
// // var neighborhood1 = {
// //     neighborhood: "Luminous Estates",
// //     medianHomePrice: 270000,
// //     pool: true,
// //     tennis: false,
// //     crimeRate: "low",
// //     schools: [
// //         {name: "es1", rating: 8},
// //         {name: "ms2", rating: 8},
// //         {name: "hs3", rating: 8}
// //     ]
// // }
// //
// // var neighborhood1 = {
// //     neighborhood: "Ginormous Ego Estates",
// //     medianHomePrice: 350000,
// //     pool: true,
// //     tennis: true,
// //     crimeRate: "low",
// //     schools: [
// //         {name: "es1", rating: 9},
// //         {name: "ms2", rating: 9},
// //         {name: "hs3", rating: 9}
// //     ]
// // }
// //
// // function isDesirable(neighborhoodObject) {
// //     var totalRating = 0;
// //     for (i = 0; i < neighborhoodObject; i++) {
// //         totalRating += neighborhoodObject.schools[i].rating;
// //     }
// //     return neighborhoodObject.medianHomePrice < 300000 && neighborhoodObject.crimeRate === "low" && totalRating >= 24;
// // }
//
// //Define a function named `isDivisible` that takes in two numeric inputs: a value and divisor. If the numeric value can be evenly divided by the divisor, then return true. Otherwise, return false.
//
// // function isDivisible(input1, input2) {
// //     // your solution goes inside this function - you can change the names of the parameters input1, input2 to use in this function if you want
// //     if (input1 === null || input2 === null) {
// //         return false;
// //     } else if (input1 % input2 === 0) {
// //         return true;
// //     }
// //     return false;
// // }
//
// // tests for isEvenlyDivisible
//
// // console.log('isDivisible(75, 5) should be true', isDivisible(75, 5));
// // console.log('isDivisible(25, 25) should be true', isDivisible(25, 25));
// // console.log('isDivisible(\'fifty\', 2) should be false', isDivisible('fifty', 2));
// // console.log('isDivisible( ) should be false', isDivisible());
// // console.log('isDivisible(50, 2) should be true', isDivisible(50, 2));
// // console.log('isDivisible(50, 3) should be false', isDivisible(50, 3));
// // console.log('isDivisible(null, 2) should be false', isDivisible(null, 2));
// // console.log('isDivisible(50, null) should be false', isDivisible(50, null))
//
// // TODO: Write an arrow function named "highFive" which accepts a string and alerts the user's input, asking for a high five.
// // Example: highFive("Go") returns "Go, high five!"
//
// // const highFive = str => alert(`${str},High five!`);
//
// // TODO/CLASS: Add disney results to page!
// const disneyAPI = 'https://api.disneyapi.dev/characters';
// //DOCS: "https://disneyapi.dev/docs";
//
// const arrayOfDisney = []
// $("#search").keyup((e) => {
//     console.log("e.target.value:", e.target.value);
//     if(e.key === "Enter") fetch(disneyAPI + e.target.value)
//         .then(res => res.json())
//         .then(res => createDisney(res))
//         .catch(res => alert("No results!"));
// })
//
// Promise.all(arrayOfDisney).then(arrayOfResponses => {
//     console.log("arrayOfResponses :", arrayOfResponses);
//
//     arrayOfResponses.forEach((name) => {
//         name.json().then((res) => createDisney(res));
//     })
//
// });
//
// // ASK:
// // Can you call this api of disney characters and map each of these characters to
// // an unordered list. Attach that list to the page on the #disney id
// // Add the results to the disney div.
// // Include at least the character name in the list item.
//
//
//
// // TODO/BONUS: Add previous and next page functionality to disney results
//
// // TODO/BONUS: Take Bobs Burgers api and return what the most watched episode was.
// const bobsBurgersApi = "https://bobsburgers-api.herokuapp.com/episodes"
//
// '1' + 2
// typeof '1' + 2
// 6 % 4
// '3 + 4 is ' + 3 + 4
// '3 + 4 is ' + (3 + 4)
// 0 < 0
// 'false' == false
// true == 'true'
// 5 >= -5
// !false || false
// true || "42"
// !true && !false
// 6 % 5
// 5 < 4 && 1 === 1
// typeof 'codeup' === 'string'
// 'codeup' === 'codeup' && 'codeup' === 'Codeup'
// 4 >= 0 && 1 !== '1'
// 6 % 3 === 0
// 5 % 2 !== 0
//
// function increment(input) {
//     if(isNaN(parseNumber(input))) {
//         return false
//     } else {
//         return parseNumber(input) + 1;
//     }
// }
//
// function increment(input) {
//     if(isNaN(parseNumber(input))) {
//         return false
//     } else {
//         return parseNumber(input) + 1;
//     }
// }
//
// function add(x,y) {
//     if (isNaN(x) || isNaN(y) || typeof x === 'boolean' || typeof y === 'boolean') {
//         return false;
//     } else {
//         return parseFloat(x) + parseFloat(y);
//     }
// }
//
// function add(a,b){
//     if(isNaN(parseNumber(a)) || isNaN(parseNumber(b))) {
//         return false
//     } else {
//         return parseNumber(a) + parseNumber(b);
//     }
// }
//
// const hamsters = [
//     {
//         name: "hamtaro",
//         heightInMM: 86,
//         fur: ['orange', 'white'],
//         gender: 'male',
//         dateOfBirth: 'August 6',
//     }, {
//         name: "Bijou",
//         heightInMM: 75,
//         fur: ['white'],
//         gender: 'female',
//         dateOfBirth: 'July 10',
//     }, {
//         name: "Oxnard",
//         heightInMM: 100,
//         fur: ['grey', 'white'],
//         gender: 'male',
//         dateOfBirth: 'May 3',
//     }, {
//         name: "Boss",
//         heightInMM: 120,
//         fur: ['brown', 'white'],
//         gender: 'male',
//         dateOfBirth: 'September 22',
//     }, {
//         name: "Snoozer",
//         heightInMM: 85,
//         fur: ['brown', 'white', 'pink'],
//         gender: 'male',
//         dateOfBirth: 'January 14',
//     },
// ]
//
// function getTallestHamster(arr) {
//     let eachHeight = {heightInMM: 0};
//     arr.forEach(function (el) {
//         if (el.heightInMM > eachHeight.heightInMM) {
//             eachHeight = el;
//         }
//     });
//     return eachHeight;
// }
//
// console.log(getTallestHamster(hamsters));

// Fizz Buzz exercise

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else {
            console.log(i)
        }
    }
}
fizzBuzz();