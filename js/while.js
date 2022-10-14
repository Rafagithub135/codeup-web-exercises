"use strict";
(function () {


    let num = 2;
    let count = 0;
    while (count < 15) {
        console.log(num);
        num = num * 2;
        count = count + 1;
    }

    console.log(num);

    let allConesToSell = Math.floor(Math.random() * 50) + 50;
    console.log(allConesToSell);
    do {
        let conesToBeBought = Math.floor(Math.random() * 5) + 1;
        console.log(conesToBeBought);
        if (allConesToSell >= conesToBeBought) {
            allConesToSell = (allConesToSell - conesToBeBought);
            console.log(allConesToSell);
        } else {
            console.log("I can not sell you " + conesToBeBought + ' cones.  I only have ' + allConesToSell + ' left!');
            allConesToSell = allConesToSell - allConesToSell;
        }
        // } else
        //     break;
    } while (allConesToSell > 0)
    {
        console.log(allConesToSell);
    }
    console.log('Yay! I sold them all!')

})();