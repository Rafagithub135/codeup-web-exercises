(function () {
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    var planetsArray = planetsString.split(', ');
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    var planetsList = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];
    console.log(planetsList);
    // When the <br> tags are added, I get an error message, "Uncaught SyntaxError: Unexpected token '<' (at 27:35)"


    <ul>
        <li>'Mercury'</li>
        <li>'Venus'</li>
        <li>'Earth'</li>
        <li>'Mars'</li>
        <li>'Jupiter'</li>
        <li>'Saturn'</li>
        <li>'Uranus'</li>
        <li>'Neptune</li>
    </ul>;

})();