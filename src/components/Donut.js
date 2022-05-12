import React from "react";
import Chart from "react-apexcharts";

const options = {
    chart: {
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: true,
      position: 'bottom'
    },
    comparedResult: [2, -3, 8],
    labels: ['Invalid leads', 'New Leads', 'Valid Leads'],
    stroke: { width: 0 },
    colors: ['#dc3545', '#007bff', "#28a745"],
    grid: {
      padding: {
        right: -20,
        bottom: -8,
        left: -20
      }
    },
    plotOptions: {
      pie: {
        startAngle: -10,
        donut: {
          labels: {
            show: true,
            name: {
              offsetY: 15
            },
            value: {
              offsetY: -15,
              formatter(val) {
                return "20%"
              }
            },
            total: {
              show: true,
              offsetY: 15,
              label: 'Total leads',
              formatter() {
                return "100%"
              }
            }
          }
        }
      }
    },
    responsive: [
      {
        breakpoint: 1325,
        options: {
          chart: {
            height: 300
          }
        }
      },
      {
        breakpoint: 1200,
        options: {
          chart: {
            height: 300
          }
        }
      },
      {
        breakpoint: 1065,
        options: {
          chart: {
            height: 300
          }
        }
      },
      {
        breakpoint: 992,
        options: {
          chart: {
            height: 200,
          }
        }
      }
    ]
  }
  const series = [
    20,
    60,
    20
    
  ]


const Donut = () => {
    return (
        <Chart 
        type="donut" 
        options={options}
        series={series}
        />

    )
}

export default Donut;