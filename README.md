# 🌤️ SkyCast - Weather Forecast App

**SkyCast** is a simple, modern weather forecasting web application built using HTML, CSS, and JavaScript, enhanced with Bootstrap and Bootstrap Icons. It fetches real-time weather data using the [OpenWeatherMap API](https://openweathermap.org/api).

---

## 🚀 Features of SkyCast

- 🌐 Real-time weather data based on city name
- 🌡️ Displays temperature, humidity, and wind speed
- 📷 Weather-specific icons for conditions like clear, rain, clouds, drizzle, etc.
- ❗ Error handling for invalid city names
- 🔎 Search functionality with Bootstrap styling

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Bootstrap 5
- Bootstrap Icons
- OpenWeatherMap API

---

## 📦 Project Structure

WeatherApp/
├── node_modules/
├── public/
│   └── images/
│       ├── rain.png
│       ├── clear.png
│       ├── clouds.png
│       ├── drizzle.png
│       ├── humidity.png
│       ├── wind.png
│       └── mist.png
├── src/
│   ├── style.css
│   └── script.js
├── index.html
├── package.json
├── package-lock.json
├── .gitignore
└── README.md



---

## ⚙️ How to Run

1. Clone the repository:

   ```
   git clone https://github.com/JasvanthMajjari/SkyCast.git
   cd skycast
  
2. Install dependencies (for Bootstrap and icons):

   npm install bootstrap bootstrap-icons

3. Open index.html directly in your browser.


🔑 API Key

WeaTrak uses the OpenWeatherMap API. Make sure you:

    Get your free API key from https://openweathermap.org/api

    Replace the API key in script.js:

             const apiKey = "your_actual_api_key_here";


📜 License

This project is licensed under the MIT License(LICENSE).

