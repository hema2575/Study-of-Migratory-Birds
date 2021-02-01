// var params = 'name=John';

// fetch(`/data/${params}/`)
//     .then(response => {
//             response.json()
//             .then(data => {
//                 console.log(data); // Use the data is some way
//             });
//     });
// console.log(birdData);
function getPlots(inputSpecies) {
    //Read samples.json
    console.log(inputSpecies)
    // d3.json("samples.json").then (sampledata =>{
    //     // console.log(sampledata)
    //     //filtering on samples
    //     var sampleinfo = sampledata.samples
    //     console.log(sampleinfo)
    var filterdata = birdData.filter(x => x.SPECIESNAME === inputSpecies)
    //console.log(filterdata)
    // var OTU_id = filterdata[0].otu_ids;
    // console.log(ids)
    //var sampleValues = parseInt(filterdata[0]["COUNT"]);
    //console.log(sampleValues)

    const regions = [];
    const map = new Map();
    for (const item of filterdata) {
        if (!map.has(item.REGION)) {
            map.set(item.REGION, true);    // set any value to Map
            regions.push(
                item.REGION
            );
        }
    }
    //console.log(regions)
    //console.log(regions[2])

    //sum of the count of birds for each region given input species:
    // set initial birdcount variable

    var totalbirdcountperregion = []
    //console.log(totalbirdcountperregion)
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
        console.log(totalbirdcountperregion)
        // reset birdcount to 0
        var birdcount = 0

    }

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
//getPlots("American Coot");

// create the function for the change event
function optionChanged(inputSpecies) {
    getPlots(inputSpecies);
}

// create the function to get the necessary data
// function getDemoInfo(id) {
//     // read the json file to get data
//     d3.json("samples.json").then((data) => {
//         // get the metadata info for the demographic panel
//         var metadata = data.metadata;

//         // console.log(metadata)

//         // filter meta data info by id
//         var result = metadata.filter(meta => meta.id.toString() === id)[0];
//         // select demographic panel to put data
//         var demographicInfo = d3.select("#sample-metadata");

//         // empty the demographic info panel each time before getting new id info
//         demographicInfo.html("");

//         // grab the necessary demographic data data for the id and append the info to the panel
//         Object.entries(result).forEach((key) => {
//             demographicInfo.append("h5").text(key[0].toUpperCase() + ": " + key[1] + "\n");
//         });
//     });
// }


// create the function for the initial data rendering
function init() {
    //     select dropdown menu 
    var dropdown = d3.select("#selDataset");

    //     read the data 
    const species = [];
    const map = new Map();
    for (const item of birdData) {
        if (!map.has(item.SPECIESNAME)) {
            map.set(item.SPECIESNAME, true);    // set any value to Map
            species.push(
                item.SPECIESNAME
            );
        }
    }
    //    get the id data to the dropdwown menu
    species.forEach(function (name) {
        dropdown.append("option").text(name).property("value");
    });
     //  call the function to display the data and the plots to the page
    //  getPlots(species[0]);
};


init();