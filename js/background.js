const images = [];
const selectedImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
bgImage.src = `img/${selectedImage}`;
document.body.appendChild(bgImage);
