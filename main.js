import Chart from "chart.js/auto";
const ctx = document.getElementById("oxyChart");

new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Oxygen concentration", "Total gases concentration"],
    datasets: [
      {
        label: "concentration of oxygen in the blood",
        data: [95.8, 4.2],
        backgroundColor: ["rgb(9, 100, 185)", "rgba(0, 0, 0, 0)"],
        hoverOffset: 20,
        borderColor: ["white", "black"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: false,
  }
});

const ctx3 = document.getElementById("bpm       Chart");

new Chart(ctx3, {
  type: "line",
  data: {
    labels: ["Oxygen concentration", "Total gases concentration"],
    datasets: [
      {
        label: "concentration of oxygen in the blood",
        data: [75, 25],
        backgroundColor: ["rgb(9, 100, 185)", "rgba(0, 0, 0, 0)"],
        hoverOffset: 20,
        borderColor: ["white", "black"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: false ,
    plugins: {
      title: {
        display: true,
        text: (ctx) => 'Chart.js Line Chart - stacked=' + ctx.chart.options.scales.y.stacked
      },
      tooltip: {
        mode: 'index'
      },
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Month'
        }
      },
      y: {
        stacked: true,
        title: {
          display: true,
          text: 'Value'
        }
      }
    }
  },
});

const ctx1 = document.getElementById("heartChart");

new Chart(ctx1, {
  type: "line",
  data: {
    labels: ["Oxygen concentration", "Total gases concentration"],
    datasets: [
      {
        label: "concentration of oxygen in the blood",
        data: [75, 25],
        backgroundColor: ["rgb(9, 100, 185)", "rgba(0, 0, 0, 0)"],
        hoverOffset: 20,
        borderColor: ["white", "black"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: false ,
    plugins: {
      title: {
        display: true,
        text: (ctx) => 'Chart.js Line Chart - stacked=' + ctx.chart.options.scales.y.stacked
      },
      tooltip: {
        mode: 'index'
      },
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Month'
        }
      },
      y: {
        stacked: true,
        title: {
          display: true,
          text: 'Value'
        }
      }
    }
  },
});

