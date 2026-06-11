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
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.getElementById("txtCity");
const searchBtn = document.getElementById("searchBtn");

const weatherIcon = document.querySelector(".weather-icon");

const cityEl = document.querySelector(".city");
const tempEl = document.querySelector(".temp");
const humidityEl = document.querySelector(".humidity");
const windEl = document.querySelector(".wind");

const weatherBox = document.querySelector(".weather");
const errorBox = document.querySelector(".error");

function showMessage(msg) {
  errorBox.innerHTML = msg;
  errorBox.style.display = "block";
  weatherBox.style.display = "none";
}

async function checkWeather(city) {
  try {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();

    if (data.cod != 200) {
      showMessage("Invalid city name. Enter city name");
      return;
    }

    cityEl.innerHTML = data.name;
    tempEl.innerHTML = Math.round(data.main.temp) + "°C";
    humidityEl.innerHTML = data.main.humidity + "%";
    windEl.innerHTML = data.wind.speed + " km/h";

    const condition = data.weather[0].main;

    const icons = {
      Clouds: "./public/images/clouds.png",
      Clear: "./public/images/clear.png",
      Rain: "./public/images/rain.png",
      Drizzle: "./public/images/drizzle.png",
      Mist: "./public/images/mist.png",
    };

    weatherIcon.src = icons[condition] || icons["Clear"];

    weatherBox.style.display = "block";
    errorBox.style.display = "none";
  } catch (err) {
    showMessage("Invalid city name. Enter city name");
  }
}

function handleSearch() {
  const city = searchBox.value.trim();
  // empty input
  if (city === "") {
    showMessage("Please enter your city name");
    return;
  }

  checkWeather(city);
}

searchBtn.addEventListener("click", handleSearch);

searchBox.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleSearch();
  }
});
