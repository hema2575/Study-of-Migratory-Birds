// Function to generate bar plot
function getPlots(inputSpecies) {
   
    //Read samples.json
    console.log(inputSpecies)

    // Filter data by selected species name
    var filterdata = birdData.filter(x => x.SPECIESNAME === inputSpecies)

    // Generate empty list for regions
    const regions = [];
    const map = new Map();

    // Loop through data to write unique region names to regions list
    for (const item of filterdata) {
        if (!map.has(item.REGION)) {
            map.set(item.REGION, true);    // set any value to Map
            regions.push(
                item.REGION
            );
        }
    }

    // Write empty list for bird count
    var totalbirdcountperregion = []

    // Set bird counter to 0
    var birdcount = 0

    // loop through regions array
    for (var i = 0; i < regions.length; i++) {
        // loop through the bird data
        for (var j = 0; j < filterdata.length; j++) {
            // loop through birdcount data to sum totals for regions
            if (filterdata[j].REGION === regions[i]) {
                // console.log('bird loop inner')
                var birdcount = birdcount + parseInt(filterdata[j].COUNT);
            }
        }
        // append key item to dictionary
        totalbirdcountperregion.push(birdcount)

        // reset birdcount to 0
        var birdcount = 0

    }

    // set trace for bar chart
    var trace = {
        x: regions,
        y: totalbirdcountperregion,
        marker: {
            color: 'blue'
        },
        type: "bar",
        orientation: "v",
    };
    // create data variable
    var data = [trace];

    // create layout variable to set plots layout
    var layout = {
        title: {
            text: 'Birds per Region',
            font: {
                family: 'Courier New, monospace',
                size: 24
            },
            xref: 'paper',
            x: 0.05,
        },
        xaxis: {
            title: {
                text: 'Regions',
                font: {
                    family: 'Courier New, monospace',
                    size: 18,
                    color: '#7f7f7f'
                }
            },
        },
        yaxis: {
            title: {
                text: 'Bird Count',
                font: {
                    family: 'Courier New, monospace',
                    size: 18,
                    color: '#7f7f7f'
                }
            },
            showticklabels: false,
        },

        margin: {
            l: 100,
            r: 100,
            t: 100,
            b: 100
        }
    }

    // create the bar plot
    Plotly.newPlot("bar", data, layout);
};

// create the function for the change event
function optionChanged(inputSpecies) {
    getPlots(inputSpecies);
}       

// create the function for the initial data rendering
function init() {
    // select dropdown menu 
    var dropdown = d3.select("#selDataset");

    // create empty set for species names
    const species = [];
    const map = new Map();
    // Loop through data to write unique species names to species list
    for (const item of birdData) {
        if (!map.has(item.SPECIESNAME)) {
            map.set(item.SPECIESNAME, true);    // set any value to Map
            species.push(
                item.SPECIESNAME
            );
        }
    }
    // append species names to the dropdwown menu
    species.forEach(function (name) {
        dropdown.append("option").text(name).property("value");
    });
};


init();

            function close_window() {
                if (confirm("Close Window?")) {
                window.close();
                }
            }
// This is the chart.js line chart
        var chartdata = {            
                labels: ['Central Highlands', 'East Coast', 'Lower West Coast','Northwestern Highlands','Other interior highlands','Upper west coast'],
                datasets: [
                    {
                  label: 'Amercian Coot',
                  fill: false,
                  // backgroundColor: 'rgb(255, 99, 132)',
                  borderColor: 'rgb(255, 99, 132)',
                  data: [1623058,743559,69749,598172,169325,5032543],                  
                },
                {   label: 'Amercian Wigeon',
                    fill: false,
                    // backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgba(59, 89, 152, 1)',
                    data: [1161646,3320612,524441,138270,20107,2536762],
                  },
                  { label: 'Amercian Green-winged Teal',
                    fill: false,
                    // backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgba(59, 89, 152, 1)',
                    data: [69749, 743559, 5032543, 169325, 1623058, 598172],
                  },
                  {
                    label: 'Generic Scaup',
                    fill: false,
                    // backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: [1443692, 5058974, 4096106, 6755, 187374, 90383],                  
                  },
  
                  {   label: 'Cinnamon Teal',
                      fill: false,
                      // backgroundColor: 'rgb(255, 99, 132)',
                      borderColor: 'rgba(59, 89, 152, 1)',
                      data: [849835, 4778350, 2727452, 40415, 1047877, 27225],
                    },
                    {
                        label: 'Whistling-Duck',
                        fill: false,
                        // backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgb(255, 99, 132)',
                        data: [182922, 1035147, 4973652, 15, 2191, 0],                  
                      },
      
                      {   label: 'Northern Pintail',
                          fill: false,
                          // backgroundColor: 'rgb(255, 99, 132)',
                          borderColor: 'rgba(99, 89, 152, 1)',
                          data: [3479053, 5747440, 508827, 17091076, 276850, 1008984],
                        },
                        {
                            label: 'Northern Shoveler',
                            fill: false,
                            // backgroundColor: 'rgb(255, 99, 132)',
                            borderColor: 'rgb(255, 168, 132)',
                            data: [1881667, 1037635, 7157726, 72279, 1881789, 320602],                  
                          },
          
                          {   label: 'Redhead',
                              fill: false,
                              // backgroundColor: 'rgb(255, 99, 132)',
                              borderColor: 'rgba(59, 89, 182, 1)',
                              data: [30397, 12345, 4904278, 1175515, 745, 62442],
                            },
                            {   label: 'Gadwall',
                              fill: false,
                              // backgroundColor: 'rgb(255, 99, 132)',
                              borderColor: 'rgba(59, 59, 152, 1)',
                              data: [1799731, 1206097, 269269, 24315, 521659, 100754],                         },          

            ]              
        };
        // Assign chart to element on html
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
          // The type of chart we want to create
          type: 'line',    
          // The data for our dataset
          data: chartdata    
        });