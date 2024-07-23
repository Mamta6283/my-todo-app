import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import TodoItems from './TodoItems';

function List(props) {
    const filterTodos = useSelector((state)=>{
        return state.todos;
    })
    const filter =useSelector((state)=>{
        return state.filter;
    })
    const search =useSelector((state)=>{
        return state.search;
    })
    const filteredTodos=useMemo(()=>{
        return filterTodos.filter((todo)=>{
            const matchFilter=(filter === "COMPLETED" && todo.complete)||
                              (filter === "INCOMPLETED" && todo.complete)||
                              (filter === "ALL");
            const matchSearch=todo.text.toLowerCase().includes(search)                  
        })
    },[filterTodos,filter,search])
         return(
            <ul>
                {
                    filteredTodos.map((todo,i)=>{
                        <TodoItems key={i}></TodoItems>
                    })
                }
            </ul>
         )
    
   
    
}

export default List;