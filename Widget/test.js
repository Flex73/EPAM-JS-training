window.onload = function getWeather() {
        var weather = new XMLHttpRequest();
        weather.open("GET", "http://api.wunderground.com/api/ed13f5227639b25d/conditions/q/CA/San_Francisco.json", true);
        weather.send();

        weather.onload = function showWeather() {
            var weatherInfo = JSON.parse(weather.responseText);
            console.log(weatherInfo);

            var currentState = document.getElementById("weather-info-city-now");
            var city = document.getElementById("weather-info-city-place");
            var temp = document.getElementById("weather-info-degree");
            var time = document.getElementById("weather-info-date");
            var wind = document.getElementById("weather-descr-wind-info");
            var humidity = document.getElementById("weather-descr-humidity-info");
            var precip = document.getElementById("weather-descr-sun-info");
            var info = document.getElementById("info");
            currentState.innerHTML = weatherInfo.current_observation.icon;
            city.innerHTML = weatherInfo.current_observation.display_location.full;
            temp.innerHTML = weatherInfo.current_observation.temp_f;
            wind.innerHTML = weatherInfo.current_observation.wind_mph + "<span> MPH</span>";
            time = new Date();
            humidity.innerHTML = weatherInfo.current_observation.relative_humidity;
            precip.innerHTML = weatherInfo.current_observation.precip_today_string;

            var newWeather = document.getElementById("weather-more");
            var forecastTimeline = document.createElement("div");
            newWeather.appendChild(forecastTimeline);

            info.addEventListener("click", getForecast);
            
            function getForecast() {
                var viewForecast = new XMLHttpRequest();
                viewForecast.open("GET", "http://api.wunderground.com/api/ed13f5227639b25d/forecast10day/q/CA/San_Francisco.json", true);
                viewForecast.send();

                viewForecast.onload = function showForecast() {
                    var forecastInfo = JSON.parse(viewForecast.responseText);
                    console.log(forecastInfo);
                    var value = forecastInfo.forecast.txt_forecast.forecastday;
                    for (index in value) {
                        newWeather.innerHTML = "Weather on " + forecastInfo.forecast.txt_forecast.date + " is " + value[index]['fcttext'];
                    }
                };
            };
        };
};