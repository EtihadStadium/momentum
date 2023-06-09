import { config } from "./apikey.js";
const weather = document.getElementById("weather");
const API_KEY = config.key;
function onGeoOk(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error("API request failed!");
            }
            return response.json();
        })
        .then((data) => {
            weather.innerText = `${data.weather[0].main}, ${data.main.temp.toFixed(1)}° - ${data.name}`;
        })
        .catch((error) => {
            console.error(error);
            alert("Failed to load weather information!");
        });
}
function onGeoError() {
    alert("No weather information!");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
