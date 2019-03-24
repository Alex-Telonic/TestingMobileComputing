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

navigator.geolocation.getCurrentPosition(function(position) {
document.getElementById("gps").innerHTML = "<h1>" + "latitude: " + position.coords.latitude + "<br>" 
+ "longitude: " + position.coords.longitude + "</h1>";
});

}
);

