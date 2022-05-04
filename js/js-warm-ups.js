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
const products - [
    {
        name: 'Hammer',
        priceInCents: 4500,
        isInStock: true
    },
    {
        name: 'Computer',
        priceInCents: 45000,
        isInStock: true
    },
    {
        name: 'Water Bottle',
        priceInCents: 3300,
        isInStock: true
    }
    {
        name: 'car',
        priceInCents: 990000,
        isInStock: true
    }
    {
        name: 'Cup',
        priceInCents: 230,
        isInStock: false
    }
    {
        name: 'Book',
        priceInCents: 540,
        isInStock: false
    },
];

var inStockItem = 0;

function returnMostExpensiveProductObjectInStock(products) {
    return Math.max.apply(Math, products);
}

function returnLeastExpensiveProductObjectInStock(products) {
    return Math.min.apply(Math, products);
}

var averageInStockPrice = 0;

function returnAveragePriceOfAllProductsInStock(products) {
    if (isInStock === true) {
        averageInStockPrice += priceInCents;
    }
    return averageInStockPrice / products.length;
}

var notInStock = 0;

function returnProductObjectsNotInStock(products) {
    if (isInStock !== true) {
        notInStock += priceInCents;
    }
    return notInStock;
}