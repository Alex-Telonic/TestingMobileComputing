document.addEventListener("DOMContentLoaded", function(event) {

function sayHello(event) {
	console.log(event);
	var name = document.getElementById("text").value;
	document.getElementById("output").innerHTML = "<h2>" + "Hello " + name + "</h2>";
}

document.querySelector("button").addEventListener("click", sayHello);


window.addEventListener('devicemotion', function(event) {
  console.log(event.acceleration.x + ' m/s2');
  document.getElementById("motionvalue").innerHTML = "<h1>" + "Value: " + event.acceleration.x + "</h1>";

});

// navigator.geolocation.getCurrentPosition(function(position) {

// });

function geo_success(position) {
document.getElementById("gps").innerHTML = "<h1>" + "latitude: " + position.coords.latitude + "<br>" 
+ "longitude: " + position.coords.longitude + "</h1>";
}

function geo_error() {
  alert("Entschuldigung, keine Positionsinformationen sind verfügbar.");
}

var geo_options = {
  enableHighAccuracy: true, 
  maximumAge        : 30000, 
  timeout           : 27000
};

var wpid = navigator.geolocation.watchPosition(geo_success, geo_error, geo_options);

}
);

