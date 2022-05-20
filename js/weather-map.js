// $.get("http://api.openweathermap.org/data/2.5/weather", {
//     APPID: OPEN_WEATHER_APPID,
//     q:     "Philadelphia, Pa, US"
// }).done(function(data) {
//     console.log(data);
// });


$.get("http://api.openweathermap.org/data/2.5/onecall", {
    APPID: OPEN_WEATHER_APPID,
    lat:    39.9523,
    lon:   -75.1638,
    units: "imperial"
}).done(function(data) {
    console.log('The entire response:', data);
    console.log('Diving in - here is current information: ', data.current);
    console.log(data.current.temp);
    console.log(data.current.weather[0].description);
    console.log(data.daily);
    data.daily.forEach(function (dailyForecast, index){
        if (index < 5) {
            console.log(dailyForecast.temp.max);
            console.log(dailyForecast.temp.min);
        }
    });
    console.log('A step further - information for tomorrow: ', data.daily[1]);
});

function getAndSetWeather(latitude, longitude){
    $.get("http://api.openweathermap.org/data/2.5/onecall", {
        APPID: OPEN_WEATHER_APPID,
        lat: !latitude? 39.9523: latitude,
        lon: !longitude? -75.1638: longitude,
        units: "imperial"
}).done(function(data) {
    $("#weather").html('');
    $("#forecast").html('');
    function formatTime(timeStamp){
        let dateTime = new Date(timeStamp * 1000);
        let year = dateTime.getFullYear();
        let month = months[dateTime.getMonth()];
        let day = dateTime.getDate();
        let hour = appendLeadingZeroes(dateTime.getHours());
        let minutes = appendLeadingZeroes(dateTime.getMinutes());
        let seconds = appendLeadingZeroes(dateTime.getSeconds());
        let formattedDateTime = month + " " + day + " " + year + " " + hour + ":" + minutes + ":" + seconds;
        return formattedDateTime;
    }
})

let unixTimeStamp = data.current.dt;
const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

console.log(data);
// console.log(JSON.stringify(data));

let currentTemp = data.current.temp;
let humidity = data.current.humidity;
let feelslike = data.current.feels_like;
let clouds = data.current.clouds;
let windSpeed = data.current.wind_speed;
let windDirection = data.current.wind_deg;
let weatherDescription = data.current.weather[0].description;
let icon = data.current.weather[0].icon;
let iconLink = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

// $("#weather").append("<p>Philadelphia, PA</p>")
$("#weather").append("<p>" + formatTime(unixTimeStamp) + "'></p>");
$("#weather").append("<p>Current weather: " + weatherDescription + "'></p>");
$("#weather").append("<p><img src='" + iconLink +"'></p>");
$("#weather").append("<p>Current temperature: " + currentTemp + "'></p>");
$("#weather").append("<p>Humidity: " + humidity + "%</p>");
$("#weather").append("<p>Feels Like: " + feelslike + "</p>");
$("#weather").append("<p>Wind: " + windCardinalDirection(windDirection) + " " + windSpeed + "MPH.</p>");
$("#weather").append("<hr>");



for (let i = 0; i < 5; i++) {
    $("#forecast").append("<p>" + formatTime(data.daily[i].dt) + "</p>");
    $("#forecast").append("<p>Expected weather: " + data.daily[i].weather[0].description + "</p>");
    $("#forecast").append("<p><img src='" + "http://openweathermap.org/img/wn/" + data.daily[i].weather[0].icon +"@2x.png'></p>");
    $("#forecast").append("<p>Temperature: " + data.daily[i].temp.max + "/" +data.daily[0].temp.min + "</p>");
}}
