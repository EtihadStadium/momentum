import { config } from "./apikey.js";
const information = document.getElementById("information").querySelector("span");
const body = document.querySelector("body");
const API_KEY = config.unsplashKey;
const UNSPLASH_URL = `https://api.unsplash.com/photos/random/?client_id=${API_KEY}&query=landscape&orientation=landscape`;
function getRandomGradient() {
    const angle = Math.floor(Math.random() * 361);
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    const gradient = `linear-gradient(${angle}deg, ${color1}, ${color2})`;
    return gradient;
}
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
fetch(UNSPLASH_URL)
    .then((response) => response.json())
    .then((data) => {
        const imageUrl = data.urls.full;
        body.style.backgroundImage = `url(${imageUrl})`;
        information.innerText = `${String(data.alt_description)}, by ${String(data.user.name)}`;
    })
    .catch((error) => {
        console.error(error);
        body.style.background = getRandomGradient();
        information.innerText = `Failed to load background image from Unsplash.`;
    });
