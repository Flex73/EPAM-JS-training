$(document).ready(function() {
    $("#button").click(function() {
        var city = $("#weatherInput").val();

        if(city !== '') {
            $.ajax({
                url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=imperial" + 
                "&APPID=718250c6c94b7aee1910513c161f893b",
                type: "GET",
                dataType: "jsonp",
                success: function(data) {
                    var widget = showWeather(data);
                }
            });
        } else {
            $("#error").html("You didn't enter city name");
        }
    });
});

function showWeather(data) {
    var city = $("#weatherInput").val();
    var result = "<li id='new-city'>Weather in " + city + " is: "+ data.main.temp + ", " + data.weather[0].main + "</li>";
    return $("#weatherList").append(result);
};