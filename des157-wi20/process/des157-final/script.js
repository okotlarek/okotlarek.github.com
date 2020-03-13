//SECTION ADVANCING
var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab
document.getElementById("prevBtn").style.display = "none";

function showTab(n) {
    // This function will display the specified tab of the form...
    var x = document.querySelectorAll("section");
    x[n].style.display = "block";
      //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
    document.getElementById("nextBtn").style.display = "inline";
  } else if (n == (x.length - 1)) {
    document.getElementById("prevBtn").style.display = "inline";
    document.getElementById("nextBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
    document.getElementById("nextBtn").style.display = "inline";
  }
  if (n==7) {
    evalPriority();
  }
  if (n==1) {
    makeChart();
  }
}

function nextPrev(n) {
    // This function will figure out which tab to display
    // Get a list of all the sections
    var x = document.querySelectorAll("section");
    //return early if invalid button press
    if (currentTab == 0  && n < 0 || 
        currentTab == x.length - 1 && n > 0) {
        return;
    }

    // Hide the current tab:
    x[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    
    currentTab = currentTab + n;
    if (n == -1){
        x[currentTab].className = "animated fadeInLeft";
    } else {
        x[currentTab].className = "animated fadeInRight";
    }
    
  showTab(currentTab);
}

//DRAGON DROP
const demo2 = document.getElementById('demo-2');
new DragonDrop(demo2, {
  handle: false,
  announcement: {
    reorder: (el, items) => {
      const pos = items.indexOf(el) + 1;
    },
    cancel: 'Reschedule cancelled.'
  }
});

//DETERMINE QUIZ CHARACTER

function evalPriority (){



    var first = document.querySelector("#demo-2 li").id;
    var last = document.querySelector("#demo-2 li:last-of-type").id;
    console.log(first);
    console.log(last);

    var character = document.getElementById("character");
    var monsterName = document.getElementById("monsterName");
    var persona = document.getElementById("persona");

    switch (first + '|' + last) {
        case "climate|debt":
            character.src = "images/monsters-09.png";
            monsterName.innerHTML = "Monster Name: Mobi";
            persona.innerHTML = "Based on your rankings, your views seem to skew liberal. You care more about the environment and less about addressing the national debt.";
            break;
        case ("education|debt"):
            character.src = "images/monsters-10.png";
            monsterName.innerHTML = "Monster Name: Hermann";
            persona.innerHTML = "Based on your rankings, your views seem to skew liberal. You care more about our education system and less about addressing the national debt.";
            break;
        case ("healthcare|debt"):
            character.src = "images/monsters-10.png";
            monsterName.innerHTML = "Monster Name: Hermann";
            persona.innerHTML = "Based on your rankings, your views seem to skew liberal. You care more about universal healthcare and less about addressing the national debt.";
            break;
        case ("climate|healthcare"):
            character.src = "images/monsters-10.png";
            monsterName.innerHTML = "Monster Name: Hermann";
            persona.innerHTML = "Based on your rankings, your views seem to skew liberal. You care more about the environment and less about universal healthcare";
            break;
        case ("climate|education"):
            character.src = "images/monsters-10.png";
            monsterName.innerHTML = "Monster Name: Hermann";
            persona.innerHTML = "Based on your rankings, your views seem to skew liberal. You care more about the environment and less about our education system.";
            break;
        case ("education|healthcare"):
            character.src = "images/monsters-11.png";
            monsterName.innerHTML = "Monster Name: Dexter";
            persona.innerHTML = "Based on your rankings, your views seem to be moderate. You care more about our education system and less about universal healthcare.";
            break;
        case ("healthcare|education"):
            character.src = "images/monsters-11.png";
            monsterName.innerHTML = "Monster Name: Dexter";
            persona.innerHTML = "Based on your rankings, your views seem to be moderate. You care more about universal healthcare and less about our education system.";
            break;
        case ("healthcare|climate"):
            character.src = "images/monsters-11.png";
            monsterName.innerHTML = "Monster Name: Dexter";
            persona.innerHTML = "Based on your rankings, your views seem to be moderate. You care more about universal healthcare and less about the environment.";
            break;
        case ("education|climate"):
            character.src = "images/monsters-12.png";
            monsterName.innerHTML = "Monster Name: Uma";
            persona.innerHTML = "Based on your rankings, your views seem to skew conservative. You care more about our education system and less about the environment.";
            break;
        case ("debt|healthcare"):
            character.src = "images/monsters-12.png";
            monsterName.innerHTML = "Monster Name: Uma";
            persona.innerHTML = "Based on your rankings, your views seem to skew conservative. You care more about addressing the national debt and less about universal healthcare.";
            break;
        case ("debt|education"):
            character.src = "images/monsters-12.png";
            monsterName.innerHTML = "Monster Name: Uma";
            persona.innerHTML = "Based on your rankings, your views seem to skew conservative. You care more about addressing the national debt and less about our education system.";
            break;
        case ("debt|climate"):
            character.src = "images/monsters-13.png";
            monsterName.innerHTML = "Monster Name: Cooper";
            persona.innerHTML = "Based on your rankings, your views seem to skew conservative. You care more about addressing the national debt and less about the environment.";
            break;
    }
}

function makeChart (){

    //CHART.JS
    let myChart = document.getElementById('myChart').getContext('2d');

    // Global Options
    Chart.defaults.global.defaultFontFamily = 'Open Sans';
    Chart.defaults.global.defaultFontsize = 18;
    Chart.defaults.global.defaultFontColor = '#fff';


    let PrPopChart = new Chart(myChart, {
    type: 'line',
    data: {
        labels: [1980,1984,1988,1992,1996,2000,2004,2008,2012,2016],
        datasets: [{ 
            data: [48.2, 49.1, 43.8, 52.0, 39.6, 40.3, 49.0, 51.1, 45.0, 46.1],
            label: "18-29 year olds",
            borderColor: "#fff",
            fill: false
        }, { 
            data: [67.2, 67.1, 63.1, 67.9, 56.9, 58.5, 62.4, 61.8, 59.5, 58.7],
            label: "30-44 year olds",
            borderColor: "#822DD6",
            fill: false
        }, { 
            data: [74.4, 75.3, 72.7, 76.1, 68.2, 67.8, 70.4, 69.2, 67.9, 66.6],
            label: "45-64 year olds",
            borderColor: "#6824AD",
            fill: false
        }, { 
            data: [69.8, 72.2, 72.3, 75.1, 69.1, 69.6, 71.0, 70.3, 72.0, 70.9],
            label: "65 and older",
            borderColor: "#471777",
            fill: false
        }
        ]
    },
    options: {
        title: {
        display: true,
        text: 'Reported Voting Rates by Age: 1980-2016 (%)',
        fontSize: 25,
        fontFamily: 'Open Sans',
        fontColor: '#fff'
        },
        legend: {
            labels:{
                fontFamily: 'Open Sans',
                fontColor: '#fff'
            } 
        },
        scales: { 
            yAxes: [{
                ticks: {
                    fontColor: "white",
                    fontFamily: 'Open Sans',
                    beginAtZero: true
                },
                gridLines: {
                    color: 'rgb(255,255,255,0.2)'
                },
            }],
            xAxes: [{
                ticks: {
                    fontColor: "white",
                    fontFamily: 'Open Sans',
                    beginAtZero: true
                },
                gridLines: {
                    color: 'rgb(255,255,255,0.2)'
                }
            }]
        }
    },

    layout: {
        padding:{
            left:50
        }
    }
    });
}