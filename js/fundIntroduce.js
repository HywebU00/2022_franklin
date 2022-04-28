var data = generateDayWiseTimeSeries(new Date("22 Apr 2017").getTime(), 115, {
  min: 30,
  max: 90,
});
//上方的曲線圖
var options1 = {
  chart: {
    id: "chart2",
    type: "line",
    height: 300,
    foreColor: "rgb(119, 119, 119);",
    toolbar: {
      autoSelected: "pan",
      show: false,
    },
  },
  colors: ["#FF1818"],
  stroke: {
    width: 1.5,
  },
  grid: {
    borderColor: "#ccc",
    clipMarkers: false,
    yaxis: {
      lines: {
        show: true,
      },
    },
  },

  dataLabels: {
    enabled: false,
  },
  series: [
    {
      data: data,
    },
  ],
  tooltip: {
    enabled: false,
    theme: "dark",
    x: {
      show: false,
    },
  },
  xaxis: {
    type: "datetime",
  },
  yaxis: {
    min: 0,
    tickAmount: 4,
  },
};

var chart1 = new ApexCharts(document.querySelector("#chart-area"), options1);

chart1.render();

var options2 = {
  chart: {
    id: "chart1",
    height: 130,
    type: "line",
    foreColor: "rgb(119, 119, 119);",
    brush: {
      target: "chart2",
      enabled: true,
    },
    selection: {
      enabled: true,
      fill: {
        color: "#fff",
        opacity: 0.4,
      },
      xaxis: {
        min: new Date("27 Jul 2017 10:00:00").getTime(),
        max: new Date("14 Aug 2017 10:00:00").getTime(),
      },
    },
  },
  colors: ["#FF1818"],
  series: [
    {
      data: data,
    },
  ],
  stroke: {
    width: 1,
  },
  grid: {
    borderColor: "#ccc",
  },
  markers: {
    size: 0,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: "datetime",
    tooltip: {
      enabled: false,
    },
  },
  yaxis: {
    tickAmount: 2,
  },
};

var chart2 = new ApexCharts(document.querySelector("#chart-bar"), options2);

chart2.render();

function generateDayWiseTimeSeries(baseval, count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = baseval;
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push([x, y]);
    baseval += 86400000;
    i++;
  }
  return series;
}
