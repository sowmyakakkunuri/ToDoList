import React, { useState } from 'react'
const SearchComponent = ({handleSearch}) => {
    const [val,setValue] =useState("");


  return (
        <>
            <div>
        <input
          className="search-box"
          placeholder="Enter The Title Of Movie"
          onChange={(event) => setValue(event.target.value)}
          value={val}
          />
          <button onClick={()=>handleSearch(val)}>Search</button>
         

          
                
      </div>
        </>
      
  )
}

export default SearchComponent