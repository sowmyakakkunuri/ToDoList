import React, { useState } from 'react'
const SearchComponent = ({handleSearch}) => {
    const [val,setValue] =useState("");
    const [filterType, setFilterType] =useState("");
    const [status, setStatus] = useState("");

    function handleSearchClick(){
      // if(!filterType || filterType.length===0){
      //   alert("Enter a filter type");
      // }
      // else{
        handleSearch(val, filterType, status);
      // }
    }

  return (
        <>

          <select onChange={(e)=>setFilterType(e.target.value)} value={filterType}>
            <option value="">Search by</option>
            <option value="title">Title</option>
            <option value="userId">UserID</option>
            <option value="id">ItemID</option>
            <option value="status">Status</option>
          </select>
            <div>

              <div>

                <select onChange={(e)=>setStatus(e.target.value)} value={status}>
                  <option value="">Filter by status</option>
                  <option value="all">Filter all tasks</option>
                  <option value="completed">Filter completed tasks</option>
                  <option value="due">Filter due tasks</option>
                </select>
              </div>


          
        <input
          className="search-box"
          placeholder={`Enter ${filterType}`}
          onChange={(event) => setValue(event.target.value)}
          value={val}
          />
          <button onClick={handleSearchClick}>Search</button>
         

          
                
      </div>
        </>
      
  )
}

export default SearchComponent