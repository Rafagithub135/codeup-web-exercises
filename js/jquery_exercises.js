"use strict";
$(function () {
    // Id Selectors

    // alert("The DOM is now fully loaded and can be manipulated.");
    // let info = $('#prime').html();
    // alert(info);
    // Only the first id is alerted.

    // Class Selectors
    // $('.codeup').css('border', '1px solid red');
    // No because it was an id that was added, not a class.

    // Element Selectors
    // $('li').css('font-size', '20px');
    // $('h1').click(function () {
    //     $('h1').css("background-color", "yellow");
    // });
    // $('p').click(function () {
    //     $('p').css('background-color', 'cyan');
    // });
    // $('li').click(function () {
    //     $('li').css('background-color', 'green');
    // });
    // let title = $('h1').html();
    // alert(title);

    // Multiple Selectors
    $('h1, p, li').css('background-color', 'red');
})