import React from "react";
import { Box } from "@chakra-ui/react";
import DataTable from "react-data-table-component";

const columns = [
    {
        name: '#',
        selector: row => `#${row.id}`,
        center : true,
        maxWith: "50px"
    },
    {
        name: 'Title',
        selector: row => row.title,

        center : true
    },
    {
        name: 'Year',
        selector: row => row.year,
        center : true
    },
];
const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
]


const TableData = () => {
    return (
        <Box
        boxShadow="0px 0px 15px -3px rgba(0,0,0,0.1)"
        >
            <DataTable
       
       style={{
           width: '90%',
           
       }}
           columns={columns}
           data={data}
       />
        </Box>

    )
}

export default TableData;