"use strict";

const key = 'd7356011dd7f51055dbae8f847b0ea9d';
if(key=='d7356011dd7f51055dbae8f847b0ea9d') document.getElementById('temperature').innerHTML = ('Recuerda poner tu clave API!');

function weatherBallon( cityID ) {
	fetch('https://api.openweathermap.org/data/2.5/forecast?lat=43.3715&lon=-8.3959&units=metric&exclude=minutely,daily,alerts' + cityID+ '&appid=' + key)  
	.then(function(resp) { return resp.json() }) // Convert data to json
	.then(function(data) {
		drawWeather(data);
	})
	.catch(function() {
		// catch any errors
	});
}
function drawWeather( d ) {
  var celcius = Math.round(parseFloat(d.main.temp)-273.15);
	var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32);
  var description = d.weather[0].description; 
	
	document.getElementById('chuvia').innerHTML = description;
	document.getElementById('temperature').innerHTML = celcius + '&deg;';
	document.getElementById('city').innerHTML = d.name;
  
  if( description.indexOf('rain') > 0 ) {
  	document.body.className = 'rainy';
  } else if( description.indexOf('cloud') > 0 ) {
  	document.body.className = 'cloudy';
  } else if( description.indexOf('sunny') > 0 ) {
  	document.body.className = 'sunny';
  } else {
  	document.body.className = 'clear';
  }
}
window.onload = function() {
	weatherBallon( 6167865 );
}


///////////////////////////////


//Clave API de OpenWeatherMap ligada a socramel@gmail.com
const apiKey = "d7356011dd7f51055dbae8f847b0ea9d"; 

let button = document.getElementById("botonclick");

button.addEventListener("click", function() {
    console.log("Acabas de hacer click");
})

console.log(button);

button.onclick = () => {
    
}


    if (navigator.geolocation) {
        const location_timeout = setTimeout("geolocationFail()", 5000);
    
        navigator.geolocation.getCurrentPosition(function(position) {
            clearTimeout(location_timeout);
    
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;

            console.log(lat,lon);
    
        }, function(error) {
            clearTimeout(location_timeout);
            geolocationFail();
        });
    } else {
        // Fallback for no geolocation
        geolocationFail();
    }
