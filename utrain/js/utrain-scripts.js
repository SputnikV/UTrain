const width_threshold = 480;

function drawBarChart() {
  if ($("#barChart").length) {
    ctxBar = document.getElementById("barChart").getContext("2d");

    optionsBar = {
      responsive: true,
      scales: {
        yAxes: [
          {
            barPercentage: 0.2,
            ticks: {
              beginAtZero: true
            },
            scaleLabel: {
              display: true,
              labelString: "Courses"
            }
          }
        ]
      }
    };

    optionsBar.maintainAspectRatio =
      $(window).width() < width_threshold ? false : true;

    /**
     * COLOR CODES
     * Red: #F7604D
     * Aqua: #4ED6B8
     * Green: #A8D582
     * Yellow: #D7D768
     * Purple: #9D66CC
     * Orange: #DB9C3F
     * Blue: #3889FC
     */

    configBar = {
      type: "horizontalBar",
      data: {
        labels: ["AWS", "Intro to Banking", "Leadership Skills", "Machine Learning", "Java", "HTML"],
        datasets: [
          {
            label: "% complete",
            data: [33, 40, 28, 49, 90, 38],
            backgroundColor: [
              "#FFD433",
              "#33FF33",
              "#33FFD1",
              "#33A8FF",
              "#333CFF",
              "#A833FF"
            ],
            borderWidth: 0
          }
        ]
      },
      options: optionsBar
    };

    barChart = new Chart(ctxBar, configBar);
  }
}

function drawPieChart() {
  if ($("#pieChart").length) {
    var chartHeight = 300;

    $("#pieChartContainer").css("height", chartHeight + "px");

    ctxPie = document.getElementById("pieChart").getContext("2d");

    optionsPie = {
      responsive: true,
      maintainAspectRatio: false,
      layout: {
        padding: {
          left: 10,
          right: 10,
          top: 10,
          bottom: 10
        }
      },
      legend: {
        position: "top"
      }
    };

    configPie = {
      type: "pie",
      data: {
        datasets: [
          {
            data: [50, 35, 15],
            backgroundColor: ["#FFDA33", "#33FF55", "#33FFFC"],
            label: "Storage"
          }
        ],
        labels: [
          "Reading",
          "Hands on",
          "Assessments"
        ]
      },
      options: optionsPie
    };

    pieChart = new Chart(ctxPie, configPie);
  }
}

function updateBarChart() {
  if (barChart) {
    barChart.options = optionsBar;
    barChart.update();
  }
}
