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
        breakpoint: 992,
        options: {
          chart: {
            height: 380
          },
          legend: {
            position: 'bottom'
          }
        }
      },
      {
        breakpoint: 576,
        options: {
          chart: {
            height: 320
          },
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                  name: {
                    fontSize: '1.5rem'
                  },
                  value: {
                    fontSize: '1rem'
                  },
                  total: {
                    fontSize: '1.5rem'
                  }
                }
              }
            }
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
        height="100%"
        />

    )
}

export default Donut;