// Create a map object
var myMap = L.map("map", {
  center: [39.82, -98.57],
  zoom: 5
});

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

console.log(regions);

// Loop through the regions array and create one marker for each region object
for (var i = 0; i < regions.length; i++) {

  // Conditionals for countries points
  var color = "";
  if (regions[i].count > 200) {
    color = "yellow";
  }
  else if (regions[i].count > 100) {
    color = "blue";
  }
  else if (regions[i].count > 90) {
    color = "green";
  }
  else {
    color = "red";
  }
console.log(regions[i])
  // Add circles to map
  L.circle(regions[i].location, {
    fillOpacity: 0.75,
    color: "white",
    fillColor: color,
    // Adjust radius
    radius: regions[i].count
  }).bindPopup("<h1>" + regions[i].name + "</h1> <hr> <h3>Points: " + regions[i].count + "</h3>").addTo(myMap);
}
