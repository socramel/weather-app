"use strict";

let city = locationBtn.addEventListener("llovera", () => {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {

        alert("Lo sentimos, no encontramos tu ubicación");
    }

}
)





//const form = document.querySelector("form.search"); //Selecciona formulario

let  apiKey = "f80778f75881af0461c3a4c371f01acf"; //Clave de la API

let tiempo = {
    "apiKey": apiKey, fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=current,minutely,daily,alertsy&appid={API key}").then((response) => response.json()).then((data) => console.log(object.weather[0].description)); //Obtiene el tiempo. clg(data)

}

}; 