import React from 'react'
const DisplayItems = ({list}) => {
  return (
    <div>
            <ul>{
            
               

                list?.map(item=>(
                  <div className="todo-item">
        <p>itemId: {item.id}, userId: {item.userId}</p>
        <p>title: {item.title}</p>
        <p>status: {item.completed? "Completed":"Not Completde"}</p>
    </div>
                ))
                }</ul>
                </div>
  )
}

export default DisplayItems