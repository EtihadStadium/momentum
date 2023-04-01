import { config } from "./apikey.js";
const API_KEY = config.unsplashKey;
fetch(`https://api.unsplash.com/photos/random/?client_id=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
