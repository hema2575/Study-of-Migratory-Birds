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


// Region data
var regions = [
  {
    name: "Central High",
    location: [36.00, -94],
    // points: 227
  },
  {
    name: "East Coast",
    location: [38, -75.00],
    // points: 218
  },
  {
    name: "Lower West Coast",
    location: [33.00, -117.00],
    // points: 156
  },
  {
    name: "Northwen Highlands",
    location: [55.00, -64.00],
    // points: 140
  },
  {
    name: "Other interior highlands",
    location: [38.60, -101],
    // points: 99
  },
  {
    name: "Upper west coast",
    location: [45.00, -120.00],
    // points: 98
  }
];

// read csv file
d3.csv("birdcount.csv").then((data) => {

    // filter array by id
    var speciesFilter = data.filter(s => s.SPECIESNAME === 'American Coot');

    // set initial birdcount variable
    var birdcount = 0

    // loop through regions array
    for (var i=0; i< regions.length; i++){

        // loop through the bird data
        for (var j=0; j< speciesFilter.length; j++){

            // loop through birdcount data to sum totals for regions
            if (speciesFilter[j].REGION === regions[i].name){
                
                // console.log('bird loop inner')
                var birdcount = birdcount + parseInt(speciesFilter[j].COUNT);
            }
        }

        // append key item to dictionary
        regions[i]['count']=birdcount;

        // reset birdcount to 0
        var birdcount= 0

    }

});
    // rename dictionary
    var newRegions = regions

console.log(newRegions)


// Loop through the regions array and create one marker for each region object
for (var i = 0; i < newRegions.length; i++) {

  // Conditionals for countries points
  var color = "";
  if (newRegions[i].count > 200) {
    color = "yellow";
  }
  else if (newRegions[i].count > 100) {
    color = "blue";
  }
  else if (newRegions[i].count > 90) {
    color = "green";
  }
  else {
    color = "red";
  }
console.log(newRegions[i])
  // Add circles to map
  L.circle(newRegions[i].location, {
    fillOpacity: 0.75,
    color: "white",
    fillColor: color,
    // Adjust radius
    radius: newRegions[i].count
  }).bindPopup("<h1>" + newRegions[i].name + "</h1> <hr> <h3>Points: " + newRegions[i].count + "</h3>").addTo(myMap);
}
