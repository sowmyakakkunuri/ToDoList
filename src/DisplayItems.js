import React from 'react'
import SingleItem from './SingleItem'
const DisplayItems = ({list}) => {
  return (
    <div>
            <ul>{
            
               

                list?.map(item=>(
                  <SingleItem key={item.id} item={item}/>
                ))
                }</ul>
                </div>
  )
}

export default DisplayItems