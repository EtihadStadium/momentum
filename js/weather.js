import { config } from "./apikey.js";
const weather = document.getElementById("weather");
const API_KEY = config.key;
function onGeoOk(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            weather.innerText = `${data.weather[0].main}, ${data.main.temp} - ${data.name}`;
        });
}
function onGeoError() {
    alert("No weather information!");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
