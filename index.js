async function getWeather() {
    const location = document.getElementById('location').value;
    const weather = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=5d7ea2d8c75349ba8f184913232208&q=${location}&days=3&aqi=yes&alerts=no
    `, { mode: 'cors' });
    const weatherData = await weather.json();
    const weatherDays = weatherData.forecast.forecastday; // 3 day weather forecast
    const weatherContainer = document.getElementById('weatherInfo');
    weatherContainer.innerHTML = '';
    console.log(weatherDays);
    weatherDays.forEach(dailyWeather => {
        const weatherBox = document.createElement('div'); // Create new weather box for each day
        weatherBox.className = "weatherBox"
        // avg temp in c, avg temp in F, air quality index, condition, Wind 
        // console.log(dailyWeather.day.avgtemp_c, dailyWeather.day.avgtemp_f, dailyWeather.day.air_quality['gb-defra-index']
        //     , dailyWeather.day.condition, dailyWeather.day.maxwind_kph);
        weatherBox.innerHTML = `
        <p>Avg Temp (°C): ${dailyWeather.day.avgtemp_c}</p>
        <p>Avg Temp (°F): ${dailyWeather.day.avgtemp_f}</p>
        <p>Air Quality Index: ${dailyWeather.day.air_quality['gb-defra-index']}</p>
        <p>Condition: ${dailyWeather.day.condition.text}</p>
        <p>Max Wind Speed (kph): ${dailyWeather.day.maxwind_kph}</p>
    `;
        weatherContainer.appendChild(weatherBox);

    });
}


