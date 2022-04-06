"use strict";
console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

var favColor = prompt("What is your favorite color?");

alert("Wow! " + favColor + " is my favorite color too!!!");

var littleMermaidDaysRented = Number(prompt("How many days did you rent The Little Mermaid?"));
var brotherBearDaysRented = Number(prompt("How many days did you rent Brother Bear?"));
var herculesDaysRented = Number(prompt("How many days did you rent Hercules?"));
var pricePerDay = Number(prompt("How much was the rental fee per day?"));
var totalNumberOfDays = Number(littleMermaidDaysRented + brotherBearDaysRented + herculesDaysRented);
var totalPaid = Number(pricePerDay * totalNumberOfDays);

alert("Your total number of days you rented movies was " + totalNumberOfDays +
    " and the total price you paid was $" + totalPaid + ".")

