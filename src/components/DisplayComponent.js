import React from 'react'
const DisplayComponent = ({filteredInfo, loadingStatus, displayError}) => {

  if(loadingStatus) return (
    <>
    <h3>Loading data....!</h3>
    {console.log("hhy")}
    </>
  )

  
  if(displayError!=""){
    return(
      <h3>{displayError}</h3>
    )
    
  }

  
  if(filteredInfo.length===0){
    return <h3>No results found</h3>
  }

  return (
    <div>
            <ul>{
              
                filteredInfo?.map(item=>(
                  <div key={item.id} className="todo-item">
        <p>itemId: {item.id}, userId: {item.userId}</p>
        <p>title: {item.title}</p>
        <p>status: {item.completed? "Completed":"Not Completed"}</p>
    </div>
                ))
                }</ul>
                </div>
  )
}

export default DisplayComponent