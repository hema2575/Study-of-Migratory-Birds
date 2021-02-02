
// function parseData(createGraph) {
//     Papa.parse("./data/birdcount.csv", {
//         download: true,
//         complete: function (results) {
//             //console.log(results.data); 
//             createGraph(results.bdata);
//         }
//     })
// }


// // Parse local CSV file 

// Papa.parse("./data/birdcount.csv", {
//     complete: function (results) {
//         console.log("Finished:", results.bdata);
//         createGraph(results.bdata)
//     }
// });

// //parseData(createGraph);


var chart = c3.generate({
    bindto: '#chart',
    data: {
        columns: [
            ['LWC', 30, 200, 100, 400, 150, 250],
            ['EC', 50, 20, 10, 40, 15, 25],
            ['UWC', 160, 45, 110, 410, 35, 210],
            ['OIH', 10, 80, 130, 480, 350, 50]
        ],
        axis: {
            y: {
                label: {
                    text: 'Y Label',
                    position: 'outer-middle'
                }
            },
        }
    }

});

