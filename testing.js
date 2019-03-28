document.addEventListener("DOMContentLoaded", function(event) {

// function sayHello(event) {
// 	console.log(event);
// 	var name = document.getElementById("text").value;
// 	document.getElementById("output").innerHTML = "<h2>" + "Hello " + name + "</h2>";
// }

// document.querySelector("button").addEventListener("click", sayHello);


// window.addEventListener("devicemotion", function(event) {
//   console.log(event.acceleration.x + ' m/s2');
//   var valueshtml = "<h1>" + "X-Value (West to East): " + event.accelerationIncludingGravity.x + "</h1>";
//   valueshtml += "<h1>" + "Y-Value (South to North): " + event.accelerationIncludingGravity.y + "</h1>";
//   valueshtml += "<h1>" + "Z-Value (Perpendicular to ground): " + event.accelerationIncludingGravity.y + "</h1>";
//   document.getElementById("motionvalue").innerHTML = valueshtml;

//   console.log(event.rotationRate.alpha + ' m/s2');
//   var valueshtml = "<h1>" + "Alpha (Perpendicular to Screen): " + event.rotationRate.alpha + "</h1>";
//   valueshtml += "<h1>" + "Beta (Left to Right): " + event.rotationRate.beta + "</h1>";
//   valueshtml += "<h1>" + "Gamma (Bottom to Top): " + event.rotationRate.gamma + "</h1>";
//   document.getElementById("rotationrate").innerHTML = valueshtml;



// }, true);


// var maxX = garden.clientWidth  - ball.clientWidth;
// var maxY = garden.clientHeight - ball.clientHeight;
var counter = 0;
var situpboolean = false;

function handleOrientation(event) {

  var x = event.beta;  // In degree in the range [-180,180]
  var y = event.gamma; // In degree in the range [-90,90]
  x = x.toFixed(0);

  if (situpboolean == false) { 
  	if (x >= 60) {
  	counter++;
  	situpboolean = true;

  }

}
  else { 
  	if (x <= 10) {
  	situpboolean = false;
  }

}
  var beta = "beta : " + x + "\n";
  // innerHTML += "gamma: " + y  + "</h1>";
  $("#beta").text(beta);
  $("#counter").text( "Counter: " + counter);
  // Because we don't want to have the device upside down
  // We constrain the x value to the range [-90,90]
  // if (x >  90) { x =  90};
  // if (x < -90) { x = -90};

  // // To make computation easier we shift the range of 
  // // x and y to [0,180]
  // x += 90;
  // y += 90;

  // // 10 is half the size of the ball
  // // It center the positioning point to the center of the ball
  // ball.style.top  = (maxX*x/180 - 10) + "px";
  // ball.style.left = (maxY*y/180 - 10) + "px";
}

window.addEventListener('deviceorientation', handleOrientation);


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

