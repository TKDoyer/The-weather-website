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

    city.innerText = weatherData.name

}





// API Key 108b6dff15ff7287239749bc83d3a12f