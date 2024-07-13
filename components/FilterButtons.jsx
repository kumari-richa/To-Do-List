import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filtertodo, markallcomleted } from '../action';

  export const FilterButtons = () => {
    const Dispatch = useDispatch();
     const currentFilter = useSelector((state) => state.Filter);
   
     const handleFilter = (Filter) => {
        Dispatch(filtertodo(Filter))
    }
  return (
    <div className="flex space-x-4  items-center"> 
    <select 
    value = {currentFilter}
    onChange={(e) => handleFilter(e.target.value) }
        
    
    className=' text-sm px-2 py-1 rounded border : border-gray-400 focus: outline-none'>
       <option value="ALL">Default</option>
       <option value="COMPLETED">Completed</option>
       <option value="INCOMPLETE">Incomplete</option>
      
    </select>
    
   <button  onClick={() => Dispatch(markallcomleted())}  className='text-sm px-2 py-1 bg-blue-500 text-white ml-2 rounded'>
     MARK ALL COMPLETED</button>
    
    </div>
  )
}
export default FilterButtons;