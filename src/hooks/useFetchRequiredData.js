import { useState } from 'react';
import { useEffect } from 'react';

import { fetchToDoList, SearchToDos } from "../api/fetchData";

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
                // setLoading(false);
                setError(e.message);

                // alert(e.message);
            }finally{
                setLoading(false);
            }
        }
            
        recieveData();
            
     } ,[]);


    async function handleSearchClick(val, filterType, status) {
        setLoading(true);
        try{
            const result = await SearchToDos(data, val, filterType, status);
            console.log(result)
            SetFiltereddata(result);
            setError("");
        }catch(e){
            console.log(e);
            setError(e.message);
            // alert("Failed to search");
        }finally{
            setLoading(false);
        }
        

        
        
    }
  return (
    {data, filteredData, handleSearchClick, loading, error, setError}
  )
}

export default useFetchRequiredData