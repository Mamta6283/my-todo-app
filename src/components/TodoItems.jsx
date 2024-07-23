import React from 'react';
import { useDispatch } from 'react-redux';

function TodoItems({todo,index}) {
    const dispatch=useDispatch();

    return (
       <li className='flex flex-col md:flex-row sm:item-center justify-between border-b-2 py-2 gap-4 '>
        <div className='flex items-center flex-wrap'>
            <span className='mr-4 text-blue-500 '>{items + 1}</span>
            {/* <span className=` ${todo.completed ? "line-thorugh text-blue-300"} ` ></span> */}

        </div>
       </li>
    );
}

export default TodoItems;