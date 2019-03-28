document.addEventListener("DOMContentLoaded", function(event) {

// function sayHello(event) {
// 	console.log(event);
// 	var name = document.getElementById("text").value;
// 	document.getElementById("output").innerHTML = "<h2>" + "Hello " + name + "</h2>";
// }

// document.querySelector("button").addEventListener("click", sayHello);


window.addEventListener("devicemotion", function(event) {
  console.log(event.acceleration.x + ' m/s2');
  var valueshtml = "<h1>" + "X-Value (West to East): " + event.accelerationIncludingGravity.x + "</h1>";
  valueshtml += "<h1>" + "Y-Value (South to North): " + event.accelerationIncludingGravity.y + "</h1>";
  valueshtml += "<h1>" + "Z-Value (Perpendicular to ground): " + event.accelerationIncludingGravity.y + "</h1>";
  document.getElementById("motionvalue").innerHTML = valueshtml;

  console.log(event.rotationRate.alpha + ' m/s2');
  var valueshtml = "<h1>" + "Alpha (Perpendicular to Screen): " + event.rotationRate.alpha + "</h1>";
  valueshtml += "<h1>" + "Beta (Left to Right): " + event.rotationRate.beta + "</h1>";
  valueshtml += "<h1>" + "Gamma (Bottom to Top): " + event.rotationRate.gamma + "</h1>";
  document.getElementById("rotationrate").innerHTML = valueshtml;



}, true);


// navigator.geolocation.getCurrentPosition(function(position) {

// });

// function geo_success(position) {
// document.getElementById("gps").innerHTML = "<h1>" + "latitude: " + position.coords.latitude + "<br>" 
// + "longitude: " + position.coords.longitude + "</h1>";
// }

// function geo_error() {
//   alert("Entschuldigung, keine Positionsinformationen sind verfügbar.");
// }

// var geo_options = {
//   enableHighAccuracy: true, 
//   maximumAge        : 30000, 
//   timeout           : 27000
// };

// var wpid = navigator.geolocation.watchPosition(geo_success, geo_error, geo_options);

}
);

