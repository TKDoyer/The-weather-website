var weatherData;
var fivedayforcast;

 function handleSubmit(zipCode) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?units=imperial&zip=${zipCode}&appid=108b6dff15ff7287239749bc83d3a12f`)
    .then(res => res.json())
    .then(data => weatherData = data)
    .then(() => buildCurrentWeather()).then(() => fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${weatherData.coord.lat}&lon=${weatherData.coord.lon}&exclude=current,minutely,alerts,hourly&appid=108b6dff15ff7287239749bc83d3a12f`))
    .then(res => res.json())
    .then(data => fivedayforcast = data)
    .then(() => buildFiveDay());

    if (!zipCode) {
      alert(`Enter Zipcode`);
      return;
    }
 }

 function buildFiveDay(){
   var fivedayforcastBoxs = document.getElementsByClassName(`fiveDay`)
   
  
console.log("pay attention to me: ", fivedayforcastBoxs);
var iconArray = fivedayforcast.daily.map(day => day.weather[0].icon);



for(var i = 0; i < fivedayforcastBoxs.length;i++) {
   fivedayforcastBoxs[i].children[1].src =`http://openweathermap.org/img/wn/${iconArray[i]}@2x.png`
   // fivedayforcastBoxs[i].{target }.innerHTML =  fivedayforcast.daily.weather.temp; 

}


    
 }

 function buildCurrentWeather(){
    console.log(weatherData)
    console.log(weatherData.name)

    var city = document.getElementById("city")
    city.innerText = weatherData.name
    
    var temp = document.getElementById("temp")
    temp.innerText = weatherData.main.temp
    
    var wind = document.getElementById("wind")
    wind.innerText = weatherData.wind.speed
    
    var humidity = document.getElementById("humidity")
    humidity.innerText = weatherData.main.humidity
    
    var icon = document.getElementById("icon")
   icon.innerText = weatherData.main.clouds

}


   





// API Key 108b6dff15ff7287239749bc83d3a12f