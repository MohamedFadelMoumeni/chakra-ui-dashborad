import React from "react";
import Chart from "react-apexcharts";
const options = {
  chart: {
    parentHeightOffset: 0,
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '30%',
      borderRadius: [10]
    }
  },
  grid: {
    xaxis: {
      lines: {
        show: false
      }
    }
  },
  colors: "red",
  dataLabels: {
    enabled: false
  },
  xaxis: {
    categories: ['MON, 11', 'THU, 14', 'FRI, 15', 'MON, 18', 'WED, 20', 'FRI, 21', 'MON, 23']
  },
  yaxis: {
    opposite: "rtl"
  }
}
const series = [
  {
    data: [700, 350, 480, 600, 210, 550, 150]
  }
]


const LineChart = () => {
    return (
      <Chart options={options} series={series} type='bar' height={"100%"} />

    )
}

export default LineChart;