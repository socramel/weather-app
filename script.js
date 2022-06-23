"use strict";

const botonUbicacion = document.querySelector("button.boton");

const llaveApi = "f80778f75881af0461c3a4c371f01acf";

botonUbicacion.addEventListener("click", function(){
    fetch("https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=current,minutely,daily,alerts&appid=" + llaveApi)
})

console.log(botonUbicacion);




/////////////////////////////

async function main() {
    try {
        const response = await fetch("https://api.openweathermap.org/data/2.5/forecast?lat=43.3715&lon=-8.3959&units=metric&exclude=minutely,daily,alerts&APPID=d7356011dd7f51055dbae8f847b0ea9d");

if (response.ok) {
    const data = await response.json();

    console.log(data);

} else {
    console.log("hubo un error en la petición");
}
} catch (error) {
    console.log(error.message);
}

}

main();














/* let city = locationBtn.addEventListener("llovera", () => {

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
 */