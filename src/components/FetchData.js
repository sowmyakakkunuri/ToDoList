import React from 'react'
import SearchBar from './SearchBar';
import { useEffect } from 'react';
import { useState } from 'react';


const FetchData = () => {

    const [data,setData] =useState([]);

    const url="https://jsonplaceholder.typicode.com/todos";
        useEffect(()=>{
                fetch(url)
                .then((res) => res.json())
                .then((info)=>
                    {
                        setData(info);
                        console.log(info);
                    });
            },[]);
  return (
    <SearchBar data={data}/>
  )
}

export default FetchData