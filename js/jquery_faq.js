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
    $('#swap1').click(function (e) {
        e.preventDefault();
        console.log('click1');
    });
    $('#swap2').click(function (e) {
        e.preventDefault();
        console.log('click2');
    });
    $('#swap3').click(function (e) {
        e.preventDefault();
        console.log('click3');
    });
    $('#swap1').click(function (e) {
        e.preventDefault();
        $('#left').appendTo('.third');
        $('#right').appendTo('.second');
        $('#center').appendTo('.first');
    });
    $('#swap3').click(function (e) {
        e.preventDefault();
        $('#left').appendTo('.second');
        $('#right').appendTo('.first');
        $('#center').appendTo('.third');
    });
    $('#swap2').click(function (e) {
        e.preventDefault();
        let divs = $('.container').children();
        for (let i = 0; i < divs.length; i++) {
            let target = Math.floor(Math.random() * 2);
            console.log(target);
            if (target % 2 === 0) {
                $('#center').appendTo('.first');
                $('#left').appendTo('.third');
                $('#right').appendTo('.second');
            } else {
                $('#center').appendTo('.third');
                $('#left').appendTo('.second');
                $('#right').appendTo('.first');
            }
        }
    });
});
