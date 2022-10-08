// 1. Ned rode his bike 7 miles to the library.  He found a short-cut on the way home so he only rode 5 miles.  How many miles did Ned ride in total?

function nedBikeRide(x, y) {
    return x + y;
}
nedBikeRide(7, 5);

// 2.  Anne ate 6 cookies.  Samantha ate 4 more cookies than Anne.  How many cookies did Samantha eat?

var anne = 6;
var samantha = 4;
function cookiesEaten() {
    console.log(anne + samantha);
}

// 3.  Henry gave 5 stickers to his younger brother.  Now he only has 9 stickers.  How many stickers did Henry have at first?

var stickersHenry = 9;
var stickersBrother = 5;
function totalStickers() {
    return (stickersHenry + stickersBrother);
}

// 4.  Derek and Larry have 15 books together.  6 of the books belong to Derek.  How many books does Larry have?

var booksDerek = 6;
var booksTotal = 15;
function booksLarry() {
    return (booksTotal - booksDerek);
}

// 5. Angela had 8 computer games.  She got 3 more for her birthday.  How many computer games did Angela have then?

var gamesAtFirst = 8;
var gamesBirthday = 3;
function totalGames() {
    return (gamesAtFirst + gamesBirthday);
}

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