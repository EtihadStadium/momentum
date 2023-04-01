import { config } from "./apikey.js";
const information = document.getElementById("information").querySelector("span");
const body = document.querySelector("body");
const API_KEY = config.unsplashKey;
const UNSPLASH_URL = `https://api.unsplash.com/photos/random/?client_id=${API_KEY}&query=landscape&orientation=landscape`;
fetch(UNSPLASH_URL)
    .then((response) => response.json())
    .then((data) => {
        const imageUrl = data.urls.full;
        body.style.backgroundImage = `url(${imageUrl})`;
        information.innerText = `${String(data.alt_description)}, by ${String(data.user.name)}`;
    })
    .catch((error) => console.error(error));
