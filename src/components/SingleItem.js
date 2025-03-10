import React from 'react'
// import 
const SingleItem = ({item}) => {
  return (
    <div className="todo-item">
        <p>itemId: {item.id}, userId: {item.userId}</p>
        <p>title: {item.title}</p>
        <p>status: {item.completed? "true":"false"}</p>
    </div>
  )
}

export default SingleItem