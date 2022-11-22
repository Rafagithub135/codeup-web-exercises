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
    //The left frame swaps to the right and takes the image from the frame in the center.
    // The center frame swaps randomly to either the left or right.
    // The right frame swaps to the left and takes the image from the frame in the center.
    $('#swap').click(function (e) {
        e.preventDefault();
        let left = $('#left').attr('src="img/dark-magician.png"');
        let center = $('#center').attr('src="img/europa.webp"');
        let right = $('#right').attr('src="img/bomb.jpeg"');
        let random = Math.floor(Math.random() * 2);
        if (random === 0) {
            $('#left').attr('src="img/dark-magician.png"', center);
            $('#center').attr('src="img/europa.webp"', right);
            $('#right').attr('src="img/bomb.jpeg"', left);
        } else {
            $('#left').attr('src="img/dark-magician.png"', right);
            $('#center').attr('src="img/europa.webp"', left);
            $('#right').attr('src="img/bomb.jpeg"', center);
        }
    });
});
