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

var hourlyWageGoogle = Number(prompt("What is your hourly wage with Google?"));
var hourlyWageAmazon = Number(prompt("What is your hourly wage with Amazon?"));
var hourlyWageFacebook = Number(prompt("What is your hourly wage with Facebook?"));
var weeklyHoursWorkedGoogle = Number(prompt("How many hours did you work with Google?"));
var weeklyHoursWorkedAmazon = Number(prompt("How many hours did you work with Amazon?"));
var weeklyHoursWorkedFacebook = Number(prompt("How many hours did you work with Facebook?"));
var paycheckGoogle = Number(hourlyWageGoogle * weeklyHoursWorkedGoogle);
var paycheckAmazon = Number(hourlyWageAmazon * weeklyHoursWorkedAmazon);
var paycheckFacebook = Number(hourlyWageFacebook * weeklyHoursWorkedFacebook);

alert("You worked a total of " + (weeklyHoursWorkedGoogle +
weeklyHoursWorkedAmazon + weeklyHoursWorkedFacebook) + " hours and your total pay is "
    + (paycheckGoogle + paycheckAmazon + paycheckFacebook))

