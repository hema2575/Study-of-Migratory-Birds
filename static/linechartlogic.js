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

// var chart = c3.generate({
//     bindto: '#chart',
//     data: {
//         columns: [
//             ['LWC', 30, 200, 100, 400, 150, 250],
//             ['EC', 50, 20, 10, 40, 15, 25],
//             ['UWC', 160, 45, 110, 410, 35, 210],
//             ['OIH', 10, 80, 130, 480, 350, 50]
//         ],
//         axis: {
//             y: {
//                 label: {
//                     text: 'Y Label',
//                     position: 'outer-middle'
//                 }
//             },
//         }
//     }

// });

// This is the chart.js line chart
//function example() {
    //useEffect(() => {
      var ctx = document.getElementById('myChart').getContext('2d');
      var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
  
        // The data for our dataset
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
            label: 'My First dataset',
            // backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45],
            fill: false
          }]
        },
  
        // Configuration options go here
       // options: {}
      });
    //  return () => chart.destroy();
   // });
    //return <div className="chartjs-wrapper"><canvas id="myChart" className="chartjs"></canvas></div>;
 // }