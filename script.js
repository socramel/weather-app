"use strict";

function error() {
    window.alert ("No se puede obtener tu ubicación");
}

function getLocation() {
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
    } else { 
    console.log("La geolocalización no es compatible con este navegador.");
    }
}

// Metemos la clave API en una variable
const apiKey = "d7356011dd7f51055dbae8f847b0ea9d";

// Función para obtener la posición del dispositivo
function success(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;

    // Creamos variable para contener la url del API de Open Weather
    let url = 'https://api.openweathermap.org/data/2.5/onecall?&lat='+lat+'&lon='+lon+'&lang=es&exclude=current,minutely,daily&units=metric&appid='
        + apiKey

// Hacemos petición al fetch para respuesta y después recorremos el json para obtener la información deseada (si va a llover en las próximas 8 horas en la ubicación en que se encuentre el dispositivo)
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let llueve="no";
            for (let i = 0; i < 8; i++) {
                console.log(data.hourly[i].weather[0].main);
                if(data.hourly[i].weather[0].main=="Rain")
                    llueve="yes";
            }
            let x = document.getElementById("llueve");
            if(llueve=="yes"){
                x.innerText ="Sí";
            }else{
                x.innerText ="No";
            }
        })
}
