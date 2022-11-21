"use strict";
$(function () {
    $(document).ready(function () {
        $('#toggle-answers').click(function (e) {
            e.preventDefault();
            $('.toggle').toggleClass('invisible')
        });
    });
    $('#highlight').click(function (e) {
        e.preventDefault();
        $('ul li:last-child').css('background-color', 'yellow');
    });
    $('h3').click(function (e) {
        e.preventDefault();
        $('h3').children('ul').css('font-weight', 'bold');
    });

    // $('#codeup').html();
    // var h1Contents = $('#codeup').html();
    // alert(h1Contents);

    // $('#codeup').click(function() {
    //     var h1Contents = $('#codeup').html();
    //     alert(h1Contents);
    // });
    //
    // $('#codeup').click(function() {
    //     $(this).html('Codeup Rocks!');
    // });

});
