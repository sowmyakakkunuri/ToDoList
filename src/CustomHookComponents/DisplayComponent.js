import React from 'react'
const DisplayComponent = ({filteredInfo}) => {

  return (
    <div>
            <ul>{
                filteredInfo?.map(item=>(
                  <div className="todo-item">
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