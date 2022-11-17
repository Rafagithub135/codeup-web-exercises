$(function () {
    $("h1").on("click", function (e) {
        // let randomColor = Math.floor(Math.random() * 16777215).toString();
        // $(this).css("background-color", "#" + randomColor);
        e.target.style.backgroundColor = 'goldenrod'
    })
    $("p").dblclick(function (e) {
        e.target.style.fontSize = "18px"
    })
    $("li").hover(
        function () {
            $(this).css('color', "red");
        },
        function () {
            $(this).css('color', 'black');
        })
})