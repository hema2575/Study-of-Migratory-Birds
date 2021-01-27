// This function populates the dropdown with subject ids & populates the initial graphs
function init() {
  // Use D3 to select the dropdown menu
  var dropdownMenu = d3.select("#selDataset");

  // read in samples.json
  d3.json("data/samples.json").then((data) => {

    // Write ids to dropdown
    data.names.forEach(function(name) {
      dropdownMenu.append("option").text(name).property("value");
    });

    // Display initial info
    displayData(data.names[0])
    updateDemographic(data.names[0])
  });
}

// Update sample when new id is selected
function optionChanged(newId) {
  displayData(newId);
  updateDemographic(newId);
}

// Pull data & display bar & bubble graphs for selected ID
function displayData(newId) {

  // read in samples.json
  d3.json("data/samples.json").then((data) => {

    // filter array by id
    var sampleId = data.samples.filter(s => s.id.toString() === newId)[0];

    // filter & sort samples values
    var sample_values = sampleId.sample_values.slice(0, 10).reverse();

    // filter & sort otu ids
    var otu_ids = sampleId.otu_ids.slice(0, 10).reverse();

    // filter & sort otu labels
    var otu_labels = sampleId.otu_labels.slice(0, 10).reverse();

    // add string to otu ids for display in bar chart
    var otu_ids_edited = []
    otu_ids.forEach(function (id) {
      otu_ids_edited.push(`OTU ID: ${id}`)
    })

    // create trace for bar chart  data
    var trace1 = {
      x: sample_values,
      y: otu_ids_edited,
      type: 'bar',
      orientation: 'h',
      text: otu_labels
    };

    // write trace to data variable
    var data = [trace1];

    // write layout variable
    var layout = {
      showlegend: false,
      yaxis: {
        automargin: true
      }
    };

    // plot chart to 'bar' with data and layout information
    Plotly.newPlot('bar', data, layout);

    // create trace for Bubble chart
    var trace1 = {
      x: otu_ids,
      y: sample_values,
      mode: 'markers',
      marker: {
        size: sample_values,
        color: otu_ids
      },
      text: otu_labels
    };

    // write trace to data variable
    var data = [trace1];

    // write layout variable
    var layout = {
      showlegend: false,
      height: 600,
      width: 1200
    };

    // plot chart to 'bubble' with data and layout information
    Plotly.newPlot('bubble', data, layout);

  });

};

// Display metadata in demographic box
function updateDemographic(newId) {

  // read the json file to get data
  d3.json("data/samples.json").then((data)=> {

  // select metadata from json
  var metadata = data.metadata;

  // filter metadata by id
  var demographicId = metadata.filter(s => s.id.toString() === newId)[0];

  // Use D3 to select the metadata
  var demographicInfo = d3.select("#sample-metadata");

  // clear panel before calling new id
  demographicInfo.html("");

  // Write metadata to table
  Object.entries(demographicId).forEach((value) => {
    demographicInfo.append("h5").text(value[0] + ": " + value[1] + "\n");
  });
  });
};

init();