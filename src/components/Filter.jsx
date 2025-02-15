import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterTodo, markAllCompleted } from '../redux/actions/actions';

function Filter(props) {
    const dispatch=useDispatch()
    const currentFilter =useSelector((state)=>(state.filter))
    const handleFilter=(filter)=>{
        dispatch(filterTodo(filter))
    }
    return (
        <div className='flex space-x-4 items-center '>
            <select value={currentFilter} onChange={handleFilter(e.target.value)} className='text-sm px-2 py-1 border-blue-300 focus:outline-none'>
             <option value='ALL' >Default</option>
             <option value='COMPLETED'>Completed</option>
             <option value='INCOMPLETED'>Incompelete</option>
            </select>
            <button onClick={()=>dispatch(markAllCompleted())} className='text-sm px-2 py-1 bg-blue-700 text-white ml-2 rounded'>Mark All Completed</button>
                        
        </div>
    );
}

export default Filter;