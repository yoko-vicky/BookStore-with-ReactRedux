import ApexCharts from 'apexcharts';

const options = {
  chart: {
    height: 120,
    type: 'radialBar',
  },

  series: [64],

  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: '50%',
        background: 'transparent',
      },
      track: {
        background: '#e8e8e8',
      },
      dataLabels: {
        show: false,
      },
    },
  },

};

const renderCharts = () => {
  document.querySelectorAll('.chart').forEach((mychart) => {
    const chart = new ApexCharts(mychart, options);
    chart.render();
  });
};

export default renderCharts;
