

function findtotals(inputSpecies) {

    var filterdata1 = birdData.filter(x => x.SPECIESNAME === inputSpecies)

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
    var years = [];
    var totalbirdcountperyear = []
    var birdcount1 = 0
    // loop through regions array
    for (var i = 0; i < regions.length; i++) {
        // loop through the bird data
        for (var j = 0; j < filterdata1.length; j++) {
            // loop through birdcount data to sum totals for regions
            if (filterdata1[j].REGION === regions[i]) {
                // console.log('bird loop inner')
                var birdcount1 = birdcount1 + parseInt(filterdata1[j].COUNT);
            }
        }
        // append key item to dictionary
        totalbirdcountperyear.push(birdcount1)
        console.log(totalbirdcountperyear)
        // reset birdcount to 0
        var birdcount1 = 0
    }

    // create the function for the change event
    function optionChanged(inputSpecies) {
    getPlots(inputSpecies);
    createGraph(inputSpecies);

}

    // for (var i = 1; i < filterData.length; i++) {
    //     /* console.log(data[i][1]);  */
    //     YEARS.push(filterData[i][0]);
    //     tbcpy.push(filterData[i][2]);
    // }

}
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
