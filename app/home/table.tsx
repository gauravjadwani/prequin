"use client"; 

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useRouter } from 'next/navigation';
import { MouseEvent } from 'react';


// HTMLTableRowElement
function getName(obj:any,key:string){
  return obj[key] ? obj[key] : '-'
}
export default function BasicTable(props:any) {
  const router = useRouter();
  function handleClick(event: MouseEvent<HTMLTableRowElement>,value:any){

    event.preventDefault();
  
    // Redirect to a different page
    router.push(`investors/${value}`);
  }
  console.log("props",props.data)
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>FirmId</TableCell>
            <TableCell align="right">FirmName</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">DateAdded</TableCell>
            <TableCell align="right">Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((row:any) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              onClick={(e)=>handleClick(e,row?.firm_id)}
            >
              <TableCell component="th" scope="row" >
                {getName(row,'firm_id')}
              </TableCell>
              <TableCell align="right">{getName(row,'firm_name')}</TableCell>
              <TableCell align="right">{getName(row,'firm_type')}</TableCell>
              <TableCell align="right">{getName(row,'date_added')}</TableCell>
              <TableCell align="right">{getName(row,'address')}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
