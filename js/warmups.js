let fruit = {
    name: 'apples',
    quantity: 3,
    price: '$2.73',
}

function priceOfFruit(obj) {
    return obj.price;
}

// console.log(priceOfFruit(fruit));

let str = [
    'hello',
    'this is it',
    'I do not want to be there.',
]

function getLongestString(str) {
    let longestString = 0;
    for (let i = 0; i < str.length - 1; i++) {
      if (str[i].length > longestString) {
          console.log(longestString += str[i].length);
      } continue;
    }
}