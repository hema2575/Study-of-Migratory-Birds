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

// Country data
var countries = [
  {
    name: "Central Highlands",
    location: [36.00, -94],
    points: 227
  },
  {
    name: "East Coast",
    location: [38, -75.00],
    points: 218
  },
  {
    name: "Lower West Coast",
    location: [33.00, -117.00],
    points: 156
  },
  {
    name: "Northern Highlands",
    location: [55.00, -64.00],
    points: 140
  },
  {
    name: "Other interior highlands",
    location: [38.60, -101],
    points: 99
  },
  {
    name: "Upper west coast",
    location: [45.00, -120.00],
    points: 98
  }
];


// Loop through the cities array and create one marker for each city object
for (var i = 0; i < countries.length; i++) {

  // Conditionals for countries points
  var color = "";
  if (countries[i].points > 200) {
    color = "yellow";
  }
  else if (countries[i].points > 100) {
    color = "blue";
  }
  else if (countries[i].points > 90) {
    color = "green";
  }
  else {
    color = "red";
  }

  // Add circles to map
  L.circle(countries[i].location, {
    fillOpacity: 0.75,
    color: "white",
    fillColor: color,
    // Adjust radius
    radius: countries[i].points * 1500
  }).bindPopup("<h1>" + countries[i].name + "</h1> <hr> <h3>Points: " + countries[i].points + "</h3>").addTo(myMap);
}
