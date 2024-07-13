import React from 'react'


import { FaToggleOff, FaToggleOn  ,FaCheck, FaTimes, FaTrash}  from  'react-icons/fa'
import { useDispatch } from 'react-redux'
import { markcompleted, markincomplete, removeTodo, toggleTodo } from '../action'
export const Todoitem = ({todo,index}) => {

    const dispatch = useDispatch()
  return (
    <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4">
        <div className="flex flex-center">
            <span className="mr-4 text-gray-300">{index  + 1}</span>
            <span className={' mr-4 ${todo.completed ? "line-through  text-red-500" : " "}'}>{todo.text}</span>
        </div >

<div className=" space-x-3 ml-8 ">
    <button  onClick={() => dispatch(toggleTodo(index))}className='mr-2 text-sm bg-blue-500 text-white sm:px-2 py-2 rounded'>{todo.completed ? <FaToggleOff/> : <FaToggleOn/>} </button>

    <button  onClick={() => dispatch(removeTodo(index))}className='mr-2 text-sm bg-red-400 text-white sm:px-2 py-2 rounded'><FaTrash/></button>
{
    !todo.completed &&(
        <button   onClick={() => dispatch(markcompleted(index))}className='mr-2 text-sm bg-purple-500 text-white sm:px-2 py-2 rounded'><FaCheck/></button>
    )
}

{
    !todo.completed &&(
        <button   onClick={() => dispatch(markincomplete(index))}className='mr-2 text-sm bg-yellow-400 text-white sm:px-2 py-2 rounded'><FaTimes/></button>
    )
}
</div>
    </li>
  )
}
export default Todoitem;