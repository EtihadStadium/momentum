function onGeoOk(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(latitude, longitude);
}
function onGeoError() {
    alert("No weather information!");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
