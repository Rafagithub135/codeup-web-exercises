let fruit = {
    name: 'apples',
    quantity: 3,
    price: '$2.73',
}

function priceOfFruit(obj) {
    return obj.price;
}

console.log(priceOfFruit(fruit));