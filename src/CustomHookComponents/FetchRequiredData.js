import { useState } from 'react';
import { useEffect } from 'react';
const useFetchRequiredData = () => {
    const [data,setData] =useState([]);
    const [filteredData,SetFiltereddata] = useState([]);
    
    const url="https://jsonplaceholder.typicode.com/todos";
    useEffect(()=>{
            fetch(url)
            .then((res) => res.json())
            .then((info)=>
                {
                    setData(info);
                    SetFiltereddata(info);
                    console.log(info);
                });
        },[]);


    function handleSearchClick(val) {
        if (val.trim() === "") {
            SetFiltereddata(data);
        };
        const filteredBySearch = data.filter((item) =>
            item.title.toLowerCase()
                .includes(val.toLowerCase())
        );
        SetFiltereddata(filteredBySearch);
    }
  return (
    {data, filteredData, handleSearchClick}
  )
}

export default useFetchRequiredData