import React, { useEffect, useState } from 'react'

const ToDoList = () => {

    const [data,setData] = useState([]);
    const [todolist,setTodolist] = useState([]);

    const url="https://jsonplaceholder.typicode.com/todos";
    const fetchTodolist= (tasks)=>{
        const list= tasks.filter(task => !task.completed);
        setTodolist(list);
        console.log(todolist);
    }

    useEffect(()=>{
        fetch(url)
        .then((res) => res.json())
        .then((info)=>
            {
                setData(info);
                fetchTodolist(info);
            });
    },[]);
  return (
    <>
    
        <h1>TODOLIST</h1>

        <div>
            <ul>{
            
                todolist.map(item=>(
                
                <div className="todo-item" key={item.id}>
                    {/* <p>{item.userId}</p> */}
                    <p>itemId:{item.id} |userId:{item.userId}</p>
                    
                    <p>{item.title}</p>
                    <p>Not Completed</p>
                </div>
                
                ))
                }</ul>
                </div>
        </>
    
    );
}

export default ToDoList