(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    var names = ['Ralph', 'Marc', 'Tom', 'Mike'];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    var names = ['Ralph', 'Marc', 'Tom', 'Mike'];
    console.log(names.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    var names = ['Ralph', 'Marc', 'Tom', 'Mike'];
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);


    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    var names = ['Ralph', 'Marc', 'Tom', 'Mike'];
    for(var i = 0; i < names.index; i++);
    {
        console.log('The name at index ' + i + ' is ' + names[i]);
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    var names = ['Ralph', 'Marc', 'Tom', 'Mike'];
    names.forEach(function(name) {
        console.log(name + ' is a name in the array.');
    });

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    var names = ['Ralph', 'Marc', 'Tom', 'Mike'];
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[names.length - 1]);

})();