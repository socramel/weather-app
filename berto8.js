let button = document.getElementById("botonclick");

button.addEventListener("click", function() {
    console.log("Acabas de hacer click");
})

console.log(button);

button.onclick = () => {
    console.log("Thanks for clicking me!");
}

    if (navigator.geolocation) {
        const location_timeout = setTimeout("geolocationFail()", 5000);
    
        navigator.geolocation.getCurrentPosition(function(position) {
            clearTimeout(location_timeout);
    
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;

            console.log(lat,lon); //Con esto obtengo las coordenadas
    
        }, function(error) {
            clearTimeout(location_timeout);
            geolocationFail();
        });
    } else {
        // Fallback for no geolocation
        geolocationFail();
    }



let weather = {
    //Clave API de OpenWeatherMap ligada a socramel@gmail.com
    "apiKey": "d7356011dd7f51055dbae8f847b0ea9d",
    fetchWeather: function () {
        fetch("https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=53&lon=-8" 
        + this.apiKey 
        + "&cnt=8") 
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
    displayWeather: function(data) {

    }
}

let geocode = {
    
}