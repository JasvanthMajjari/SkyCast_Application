/* function searchClick(){
  var cityName = document.getElementById("txtCity").value;
  var apiKey = "7d9dea470d3493dce8a51a597bd2eece";
  var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;


  fetch(apiUrl).then(function(response){
    return response.json();
  })

  .then(function(weatherObj){
    document.getElementById("lblCity").innerHTML = weatherObj.name;
    document.getElementById("lblSpeed").innerHTML =  `${weatherObj.wind.speed}`;
    document.getElementById("lblHumidity").innerHTML = `${weatherObj.main.humidity}`;
    document.getElementById("temperature").innerHTML = `${weatherObj.main.temp}`;
  })
}*/



const apiKey = "7d9dea470d3493dce8a51a597bd2eece";
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector(".input-group input");
const weatherIcon = document.querySelector(".weather-icon");



async function checkWeather(city){
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if(response.status == 404){
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();


  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " kmph";

  if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "../public/images/clouds.png";
  }else if(data.weather[0].main == "Clear"){
    weatherIcon.src = "../public/images/clear.png";
  }else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "../public/images/rain.png";
  }else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src = "../public/images/drizzle.png";
  }else if(data.weather[0].main == "Mist"){
    weatherIcon.src = "../public/images/mist.png";
  }

  document.querySelector(".weather").style.display = "block";
  document.querySelector(".error").style.display = "none";
  }
  
}

document.getElementById("searchBtn").addEventListener("click", ()=>{
  checkWeather(searchBox.value);
})

