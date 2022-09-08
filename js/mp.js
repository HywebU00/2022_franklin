var options = {
  series: [44, 55, 13, 33],
  chart: {
    type: 'donut',
  },

  colors: ['#013e8e', '#0086b7', '#00b3c0', '#ff7353'],
  dataLabels: {
    enabled: false,
  },
  labels: ['股票型', '債券型', '平衡型', '貨幣型'],

  responsive: [
    {
      breakpoint: 1400,
      options: {
        title: {
          offsetY: 120,
        },
      },
    },
    {
      breakpoint: 1200,
      options: {
        title: {
          offsetY: 160,
        },
      },
    },
    {
      breakpoint: 991,
      options: {
        title: {
          offsetY: 110,
        },
      },
    },
    {
      breakpoint: 768,
      options: {
        title: {
          offsetY: 200,
        },
      },
    },
    {
      breakpoint: 520,
      options: {
        title: {
          offsetY: 180,
        },
      },
    },
    {
      breakpoint: 467,
      options: {
        title: {
          offsetY: 160,
        },
      },
    },
    {
      breakpoint: 425,
      options: {
        title: {
          offsetY: 130,
        },
      },
    },
    {
      breakpoint: 375,
      options: {
        title: {
          offsetY: 100,
        },
      },
    },
  ],
  legend: {
    position: 'right',
    offsetY: 0,
    height: 230,
    show: false,
  },
  title: {
    text: '基金類型',
    align: 'center',
    offsetY: 150,
    floating: true,
    style: {
      fontSize: '16px',
      fontWeight: 'bold',
      fontFamily: 'Noto Sans TC',
      color: '#263238',
    },
  },
};

var options2 = {
  series: [44, 55, 13, 33],
  chart: {
    type: 'donut',
  },

  colors: ['#013e8e', '#0086b7', '#00b3c0', '#ff7353'],
  dataLabels: {
    enabled: false,
  },
  labels: ['新台幣', '美元', '日圓', '人民幣'],

  responsive: [
    {
      breakpoint: 1400,
      options: {
        title: {
          offsetY: 120,
        },
      },
    },
    {
      breakpoint: 1200,
      options: {
        title: {
          offsetY: 160,
        },
      },
    },
    {
      breakpoint: 991,
      options: {
        title: {
          offsetY: 110,
        },
      },
    },
    {
      breakpoint: 768,
      options: {
        title: {
          offsetY: 200,
        },
      },
    },
    {
      breakpoint: 520,
      options: {
        title: {
          offsetY: 180,
        },
      },
    },
    {
      breakpoint: 467,
      options: {
        title: {
          offsetY: 160,
        },
      },
    },
    {
      breakpoint: 425,
      options: {
        title: {
          offsetY: 130,
        },
      },
    },
    {
      breakpoint: 375,
      options: {
        title: {
          offsetY: 100,
        },
      },
    },
  ],
  legend: {
    position: 'right',
    offsetY: 0,
    height: 230,
    show: false,
  },
  title: {
    text: '幣別𢑥總',
    align: 'center',
    offsetY: 150,
    floating: true,
    style: {
      fontSize: '16px',
      fontWeight: 'bold',
      fontFamily: 'Noto Sans TC',
      color: '#263238',
    },
  },
};

var options3 = {
  series: [44, 55, 13, 13, 10, 10],
  chart: {
    type: 'donut',
  },
  colors: ['#013e8e', '#0086b7', '#006d77', '#00b3c0', '#ff7353', '#9ad4de'],
  dataLabels: {
    enabled: false,
  },
  labels: [
    'AI新科技基金',
    '特別股收益基金',
    '全球高收益債券基金',
    '新世界股票基金',
    '第一富基金',
    '其他',
  ],

  responsive: [
    {
      breakpoint: 1400,
      options: {
        title: {
          offsetY: 120,
        },
      },
    },
    {
      breakpoint: 1200,
      options: {
        title: {
          offsetY: 160,
        },
      },
    },
    {
      breakpoint: 991,
      options: {
        title: {
          offsetY: 110,
        },
      },
    },
    {
      breakpoint: 768,
      options: {
        title: {
          offsetY: 200,
        },
      },
    },
    {
      breakpoint: 520,
      options: {
        title: {
          offsetY: 180,
        },
      },
    },
    {
      breakpoint: 467,
      options: {
        title: {
          offsetY: 160,
        },
      },
    },
    {
      breakpoint: 425,
      options: {
        title: {
          offsetY: 130,
        },
      },
    },
    {
      breakpoint: 375,
      options: {
        title: {
          offsetY: 100,
        },
      },
    },
  ],
  legend: {
    position: 'right',
    offsetY: 0,
    height: 230,
    show: false,
  },
  title: {
    text: '個別基金',
    align: 'center',
    offsetY: 150,
    floating: true,
    style: {
      fontSize: '16px',
      fontWeight: 'bold',
      fontFamily: 'Noto Sans TC',
      color: '#263238',
    },
  },
};

var chart = new ApexCharts(document.querySelector('#chart'), options);
chart.render();
var chart2 = new ApexCharts(document.querySelector('#chart2'), options2);
chart2.render();
var chart3 = new ApexCharts(document.querySelector('#chart3'), options3);
chart3.render();
