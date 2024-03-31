"use client";
import React,  { useState, useEffect }  from 'react';
import BasicTable from './table'
// import React,from 'react';
import axios from 'axios'
import { INVESTER_URL } from '../constants';

export default function home(){
    console.log("times")
    const [data, setData] = useState([]);

    useEffect(() => {
      axios.get(`${INVESTER_URL}`)
        .then(response => {
          setData(response.data);
        })
        .catch(error => {
            // setData([]);
            console.log(error);
        });
    }, []);
    return (<BasicTable data={data}/>)
}