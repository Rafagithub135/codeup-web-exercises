"use strict";
$(function () {
    $(document).ready(function () {
        $('#toggle-answers').click(function (e) {
            e.preventDefault();
            $('.toggle').toggleClass('invisible')
        });
    });
    $('.highlight').click(function (e) {
        e.preventDefault();
        $(this).css('background-color', 'cyan');
    });
    $('#highlight').click(function (e) {
        e.preventDefault();
        $('ul li:last-child').css('background-color', 'yellow');
    });
    $('h3').click(function (e) {
        e.preventDefault();
        $(this).next().css('font-weight', 'bold');
    });
    $('li').click(function (e) {
        e.preventDefault();
        $(this).parent().find('li:first-child').css('color', 'blue');
    });
    // $('.swap1').click(function (e) {
    //     e.preventDefault();
    //
    // }
});
