var weatherData;

 function handleSubmit(zipCode) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?units=imperial&zip=${zipCode}&appid=108b6dff15ff7287239749bc83d3a12f`)
    .then(res => res.json())
    .then(data => weatherData = data)
    .then(() => buildCurrentWeather());

 }

 function buildCurrentWeather(){
    console.log(weatherData)
    console.log(weatherData.name)

    var city = document.getElementById("city")
    city.innerText = `${city}`.weatherData.name
    
    var temp = document.getElementById("temp")
    temp.innerText = weatherData.main.temp
    
    var wind = document.getElementById("wind")
    wind.innerText = weatherData.wind.speed
    
    var humidity = document.getElementById("humidity")
    humidity.innerText = weatherData.main.humidity
    
    var pressure = document.getElementById("pressure")
    pressure.innerText = weatherData.main.pressure

}





// API Key 108b6dff15ff7287239749bc83d3a12f