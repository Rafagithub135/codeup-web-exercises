"use strict";
// console.log("Hello from external JavaScript");
//
// alert("Welcome to my Website!");
//
// let favColor = prompt("What is your favorite color?");
//
// alert("Wow! " + favColor + " is my favorite color too!!!");

let littleMermaidDaysRented = Number(prompt("How many days did you rent The Little Mermaid?"));
let brotherBearDaysRented = parseFloat(prompt("How many days did you rent Brother Bear?"));
let herculesDaysRented = parseFloat(prompt("How many days did you rent Hercules?"));
let pricePerDay = parseFloat(prompt("How much was the rental fee per day?"));
let totalNumberOfDays = parseFloat(littleMermaidDaysRented + brotherBearDaysRented + herculesDaysRented);
let totalPaid = Number(pricePerDay * totalNumberOfDays);

alert("Your total number of days you rented movies was " + totalNumberOfDays +
    " and the total price you paid was $" + totalPaid.toFixed(2) + ".")

let hourlyWageGoogle = Number(prompt("What is your hourly wage with Google?"));
let hourlyWageAmazon = Number(prompt("What is your hourly wage with Amazon?"));
let hourlyWageFacebook = Number(prompt("What is your hourly wage with Facebook?"));
let weeklyHoursWorkedGoogle = Number(prompt("How many hours did you work with Google?"));
let weeklyHoursWorkedAmazon = Number(prompt("How many hours did you work with Amazon?"));
let weeklyHoursWorkedFacebook = Number(prompt("How many hours did you work with Facebook?"));
let paycheckGoogle = Number(hourlyWageGoogle * weeklyHoursWorkedGoogle);
let paycheckAmazon = Number(hourlyWageAmazon * weeklyHoursWorkedAmazon);
let paycheckFacebook = Number(hourlyWageFacebook * weeklyHoursWorkedFacebook);

alert("You worked a total of " + (weeklyHoursWorkedGoogle +
weeklyHoursWorkedAmazon + weeklyHoursWorkedFacebook) + " hours and your total pay is "
+ (paycheckGoogle + paycheckAmazon + paycheckFacebook).toFixed(2));

let classInterestedNotFull = confirm("Does the class you are interested in have available room? Click 'OK' for yes or 'Cancel' for no.")
console.log(confirm);
let classInterestedNoConflict = confirm("The class you are interested in has no conflict with your current schedule? Click 'OK' for yes or 'Cancel' for no.")
console.log(confirm);
let studentEnrolled = classInterestedNotFull && classInterestedNoConflict

if (studentEnrolled){
    alert('Congratulations!!! You are enrolled in the class.');
} else {
    alert('Sorry, you are unable to enroll in this class at this time.');
}

let premiumMember = confirm("Are you a Premium Member? Click 'OK' for yes or 'Cancel' for no.")
let offerValid = confirm("Is the offer still valid? Click 'OK' for yes or 'Cancel' for no.")
let quantityQualifies = prompt("How many items are you buying?")
let productDiscountIsApplied = offerValid && (premiumMember || quantityQualifies > 2)
if (productDiscountIsApplied){
    alert('Congratulations!!! You qualify for the discount.');
} else {
    alert('Sorry, you do not qualify for the discount');
}