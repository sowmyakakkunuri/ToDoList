import { useState } from 'react';
import { useEffect } from 'react';

import { fetchToDoList } from "../api/fetchData";
import { fetchSearchValue } from '../api/fetchSearchValue';

const useFetchRequiredData = () => {
    const [data,setData] =useState([]);
    const [filteredData,SetFiltereddata] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    

    useEffect(()=>{
        const recieveData = async()=>{
            try{
                    const fetchedData = await fetchToDoList();
                    setData(fetchedData);
                    SetFiltereddata(fetchedData);
                }catch(e){
                setError(e.message);
            }finally{
                setLoading(false);
            }
        }
            
        recieveData();
            
     } ,[]);


    async function handleSearchClick(val, filterType, status) {
        setLoading(true);
        try{
            const result = await fetchSearchValue(data, val, filterType, status);
            console.log(result)
            SetFiltereddata(result);
            setError("");
        }catch(e){

            console.log(e);
            setError(e.message);
            // alert("Faile d to search");
        }finally{
            setLoading(false);
        }
        
    }

  return (
    {data, filteredData, handleSearchClick, loading, error, setError}
  )
}

export default useFetchRequiredData