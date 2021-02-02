// Create a map object
var myMap = L.map("map", {
  center: [39.82, -98.57],
  zoom: 4
});

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

console.log(regions)

// Loop through the regions array and create one marker for each region object
for (var i in regions) {

  // Conditionals for bird count
  var color = "";
  if (regions[i].count > 20000000) {
    color = "yellow";
  }
  else if (regions[i].count > 10000000) {
    color = "blue";
  }
  else if (regions[i].count > 1000000) {
    color = "green";
  }
  else {
    color = "red";
  }
  // Add circles to map
  L.circle(regions[i].location, {
    fillOpacity: 0.75,
    color: "white",
    fillColor: color,
    // Adjust radius
    radius: regions[i].count *.08
  }).bindPopup("<h1>" + regions[i].name + "</h1> <hr> <h3>Total Bird Count: " + regions[i].count + "</h3>").addTo(myMap);
}