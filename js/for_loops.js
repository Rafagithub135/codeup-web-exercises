(function() {
    var num = prompt('Enter a number: ');
    for(var i = 1; i <= 10; i++) {
        var result = i * num;
        function showMultiplicationTable(num) {
            console.log(num + " x " + i + " = " + result);
        }
    }



})();