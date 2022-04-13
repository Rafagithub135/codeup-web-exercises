(function() {

    var input = prompt('Enter a number between 1 and 50: ');
    console.log('Number to skip is: ' + input);
    for(var num = 1; num <= 50; num++) {
        if(num % 2 === 1 && num != input) {
            console.log('Here is an odd number: ' + num);
        } if(num === input){
            continue;
        }
        if(num > 50) {
            break;
        }
    }




})();