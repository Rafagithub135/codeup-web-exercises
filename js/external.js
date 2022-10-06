"use strict";
console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

var favColor = prompt("What is your favorite color?");

alert("Wow! " + favColor + " is my favorite color too!!!");

var littleMermaidDaysRented = Number(prompt("How many days did you rent The Little Mermaid?"));
var brotherBearDaysRented = parseFloat(prompt("How many days did you rent Brother Bear?"));
var herculesDaysRented = parseFloat(prompt("How many days did you rent Hercules?"));
var pricePerDay = parseFloat(prompt("How much was the rental fee per day?"));
var totalNumberOfDays = parseFloat(littleMermaidDaysRented + brotherBearDaysRented + herculesDaysRented);
var totalPaid = Number(pricePerDay * totalNumberOfDays);

alert("Your total number of days you rented movies was " + totalNumberOfDays +
    " and the total price you paid was $" + totalPaid.toFixed(2) + ".")

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
+ (paycheckGoogle + paycheckAmazon + paycheckFacebook).toFixed(2));

var classInterestedNotFull = confirm("Does the class you are interested in have available room? Click 'OK' for yes or 'Cancel' for no.")
console.log(confirm);
var classInterestedNoConflict = confirm("The class you are interested in has no conflict with your current schedule? Click 'OK' for yes or 'Cancel' for no.")
console.log(confirm);
var studentEnrolled = classInterestedNotFull && classInterestedNoConflict

if (studentEnrolled){
    alert('Congratulations!!! You are enrolled in the class.');
} else {
    alert('Sorry, you are unable to enroll in this class at this time.');
}

var premiumMember = confirm("Are you a Premium Member? Click 'OK' for yes or 'Cancel' for no.")
var offerValid = confirm("Is the offer still valid? Click 'OK' for yes or 'Cancel' for no.")
var quantityQualifies = prompt("How many items are you buying?")
var productDiscountIsApplied = offerValid &&(premiumMember || quantityQualifies > 2)
if (productDiscountIsApplied){
    alert('Congratulations!!! You qualify for the discount.');
} else {
    alert('Sorry, you do not qualify for the discount');
}