import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaArrowAltCircleRight } from "react-icons/fa";
import { addTodo, updateSearchTodo } from '../redux/actions/actions';
import Filter from './Filter';
import { BsSearch } from "react-icons/bs";

function Todo(props) {
    const dispatch=useDispatch() //it is used send the action to the store
    const[todoText,setTodoText]=useState("")
    const [searchText,setSearchText]=useState("")

    const handleAddTodo =(text)=>{
        dispatch(addTodo(text));
    }

    const saveTodo=()=>{
        if(todoText.trim() !== ""){
            handleAddTodo(todoText)
            setTodoText("");
        }
    }

    const handleSearchTodo=(value)=>{
         dispatch(updateSearchTodo(value))
    }
    return (
        <>
        <div className='max-w-4xl mx-auto sm:mt-8 p-4 bg-blue-300 rounded'>
            <h2 className='mt-3 mb-6 text-2xl font-bold text-center text-blue-700  uppercase'>Todo List App</h2>
{/* input fied */}
            <div className='flex items-center mb-4 '>
                <input type='text' placeholder='enter your name'
                className='flex-grow p-2 border-b-2 border-gray-300 rounded focus:outline-none focus:border-blue-500 bg-blue-600'
                name='text' id='addTodo' onChange={(e)=>setTodoText(e.target.value)} ></input>
                <button className='ml-4 p-2 bg-blue-500 text-white rounded hover:bg-black focus:outline-none' onClick={saveTodo}><FaArrowAltCircleRight /></button>
            </div>

            {/* filter search */}

            <div className='flex items-center justify-between flex-wrap '>
                  <Filter/>
                  
            {/* search */}
                  <div className='flex items-center justify-end mt-4 sm:mt-0'>
               <input type='text' placeholder='Search' value={searchText} onChange={(e)=>handleSearchTodo(e.target.value)}
               id='addTodo' name='text' className='flex-grow rounded p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 sm:mr-4' />
               <button className='p-2 bg-blue-500 text-white rounded hover:bg-blue-600  focus:outline-none ' onClick={saveTodo}>
               <BsSearch />
               </button>
            </div>
            </div>
    </div>
    </>
    );
}

export default Todo;