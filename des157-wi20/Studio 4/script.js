let myChart = document.getElementById('myChart').getContext('2d');

 // Global Options
 Chart.defaults.global.defaultFontFamily = 'Lato';
 Chart.defaults.global.defaultFontsize = 18;
 Chart.defaults.global.defaultFontColor = '#777';


 let PrPopChart = new Chart(myChart, {
    type: 'line',
    data: {
      labels: [1980,1984,1988,1992,1996,2000,2004,2008,2012,2016],
      datasets: [{ 
          data: [48.2, 49.1, 43.8, 52.0, 39.6, 40.3, 49.0, 51.1, 45.0, 46.1],
          label: "18-29 year olds",
          borderColor: "#FEC601",
          fill: false
        }, { 
          data: [67.2, 67.1, 63.1, 67.9, 56.9, 58.5, 62.4, 61.8, 59.5, 58.7],
          label: "30-44 year olds",
          borderColor: "#2364AA",
          fill: false
        }, { 
          data: [74.4, 75.3, 72.7, 76.1, 68.2, 67.8, 70.4, 69.2, 67.9, 66.6],
          label: "45-64 year olds",
          borderColor: "#73BFB8",
          fill: false
        }, { 
          data: [69.8, 72.2, 72.3, 75.1, 69.1, 69.6, 71.0, 70.3, 72.0, 70.9],
          label: "65 and older",
          borderColor: "#3590F3",
          fill: false
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Reported Voting Rates by Age: 1980-2016',
        fontSize: 25
      }
    },
    layout: {
        padding:{
            left:50
        }
    }
  });