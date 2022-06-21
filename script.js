"use strict";

const botonUIbicacion = document.querySelector("button.boton");

let city = button.addEventListener("click", () => {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {

        alert("Lo sentimos, no encontramos tu ubicación");
    }

}
)

//const form = document.querySelector("form.search"); //Selecciona formulario

let apiKey = "882c2da1dee58e53a73339ccf8ba635f"; //Clave de la API

let tiempo = {
    "apiKey": apiKey, fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=current,minutely,daily,alerts&hourly.rain&appid={API key}").then((response) => response.json()).then((data) => console.log(object.weather[0].description)); //Obtiene el tiempo. clg(data)

}

}; 

document.querySelector("city").innerText = "El tiempo en " + city;

document.querySelector("horas").innerText = "El tiempo en " + city;