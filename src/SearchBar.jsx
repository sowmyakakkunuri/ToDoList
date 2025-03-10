import React, { useEffect, useState } from 'react'
import './App.css';
import DisplayItems from './DisplayItems';
// import {BsSearch} from react-icons/bs
const SearchBar = ({data}) => {
    const [val,setValue] =useState("");
    const [filteredData,SetFiltereddata] = useState();

    
    useEffect(()=>{
        SetFiltereddata(data);

    },[data])

    function handleSearchClick() {
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
        <>
            <div>
        <input
          className="search-box"
          placeholder="Enter The Title Of Movie"
          onChange={(event) => setValue(event.target.value)}
          value={val}
          />
          <button onClick={handleSearchClick}>Search</button>
         

          
                <DisplayItems list={filteredData}/>
      </div>
        </>
      
  )
}

export default SearchBar
