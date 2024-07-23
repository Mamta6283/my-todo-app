import { ADD_TODO, FILTER_TODO, MARK_ALL_COMPLETED_TODO, MARK_COMPLETED_TODO, MARK_INCOMPLETED_TODO, REMOVE_TODO, SEARCH_TODO, TOGGLE_TODO } from "./actionTypes";

export const addTodo =(text)=>({
    type:ADD_TODO,
    payload:{text}
})

export const toggleTodo=(id)=>({
    type:TOGGLE_TODO,
    payload:{id}
})

export const removeTodo=(id)=>({
    type:REMOVE_TODO,
    payload:{id}
})

export const markCompleted=(id)=>({
    type:MARK_COMPLETED_TODO,
    payload:{id}
})

export const markAllCompleted=()=>({
          type:MARK_ALL_COMPLETED_TODO,
       
})

export const markIncompleted=(id)=>({
    type:MARK_INCOMPLETED_TODO,
    payload:{id}
})

export const filterTodo=(filter)=>({
    type:FILTER_TODO,
    payload:{filter}
}) 

export const updateSearchTodo=(search)=>({
    type:SEARCH_TODO,
    payload:{search}
})
