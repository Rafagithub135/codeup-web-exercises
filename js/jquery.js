"use strict";
$(function () {
    let konamiCode = ["38", "38", "40", "40", "37", "39", "37", "39", "66", "65", "13"];
    let count = 0;
    $(document).keydown(function (e) {
        let key = e.which;
        if (key == konamiCode[count]) {
            count++;
            if (count == konamiCode.length) {
                count = 0;
                let blast = new Audio("audio/dynamite.wav");
                location = "bom-boom.html";
                // alert("The world has been destroyed, but you have added 30 lives!");
            }
        } else {
            count = 0;
        }
    });
    $(document).keydown(function (event) {
        console.log(event.keyCode);
    });
});