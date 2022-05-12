import React from "react";
import {Divider,Box, Flex, Grid, GridItem, Heading, Text} from "@chakra-ui/react";
import Chart from "react-apexcharts"
import Donut from "./Donut";
import LineChart from "./LineChart";
import "flatpickr/dist/themes/material_green.css";
import TableData from "./Table";

import Flatpickr from "react-flatpickr";


const options = {
    chart: {
      sparkline: {
        enabled: true
      },
      dropShadow: {
        enabled: true,
        blur: 3,
        left: 1,
        top: 1,
        opacity: 0.1
      }
    },
    colors: ['#51e5a8'],
    plotOptions: {
      radialBar: {
        offsetY: 10,
        startAngle: -150,
        endAngle: 150,
        hollow: {
          size: '77%'
        },
        track: {
          background: '#ebe9f1',
          strokeWidth: '50%'
        },
        dataLabels: {
          name: {
            show: false
          },
          value: {
            color: '#5e5873',
            fontFamily: 'Montserrat',
            fontSize: '2.86rem',
            fontWeight: '600'
          }
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: ["#36AE7C"],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100]
      }
    },
    stroke: {
      lineCap: 'round'
    },
    grid: {
      padding: {
        bottom: 30
      }
    }
  },
  series = [83]

const Content = () => {
    return (
        <Flex
        width="100%"
        marginLeft={["0", "20"]}
        flexDir="column"
        alignSelf="stretch"
        padding={["0", "2%"]}
        >
            <Grid
            mb="55px"
            templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}  gap={6}
            >
                <GridItem 
                display="flex"
                flexDir="column"
                
                justifyContent="space-between"
            
                boxShadow="0px -2px 15px -3px rgba(0,0,0,0.1)" 
                background="white"
                padding="10px" 
                borderRadius="10px">
                    <Heading fontSize="xl" as="h2" mb="1">Leads Statistics</Heading>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <Divider my="2"/>
                    <Donut />
                </GridItem>
                <GridItem padding="10px"  boxShadow="0px -2px 15px -3px rgba(0,0,0,0.1)" background="white" borderRadius="10px">
                    <Flex 
                    width="100%"
                    alignItems="center"
                    justifyContent="space-between"
                    >
                        <Heading fontSize="xl" as="h2" mb="1">Leads Statistics</Heading>
                        <Box width="200px">
                        <Flatpickr style={{
                          background: "white" ,
                          padding: "5px",
                          borderRadius: "10px" ,
                          border : "1px solid #F1EEE9",
                          outline: "none"
                        }}  data-enable-time  placeholder="12/05/2022"/>
                        </Box>
                    
                    </Flex>
                    <LineChart />
                </GridItem>

            </Grid>
            <Grid
            templateColumns={["repeat(1, 1fr)", "2fr 1fr"]} gap={6} pb="20px"
            >
                <GridItem padding="2">
                    <TableData />
                </GridItem>
                <GridItem 
                boxShadow="0px -2px 15px -3px rgba(0,0,0,0.1)" 
                background="white"
                padding="10px" 
                borderRadius="10px"
                display="flex"
                flexDir="column"
                alignItems="center"
                 >
                     <Heading fontSize="lg" mb="2">Lead Statictis</Heading>
                     <Chart options={options} series={series} type='radialBar' height={230} />
                     <Divider />
                     <Flex
                     width="100%"
                     flexDir="row"
                     alignItems="center"
                     mt="2"
                     >
                         <Box
                         width="50%"
                         textAlign="center"
                         >
                             <Heading fontSize="md" fontWeight="normal">In Progress</Heading>
                             <Text fontWeight="bold" fontSize="lg">200K</Text>
                         </Box>
                         <Box
                         width="50%"
                         textAlign="center"
                         >
                             <Heading fontSize="md" fontWeight="normal">Completed</Heading>
                             <Text fontWeight="bold" fontSize="lg">200K</Text>
                         </Box>

                     </Flex>
                 </GridItem>

            </Grid>


        </Flex>
        
    )
}
export default Content;