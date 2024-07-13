import { useState } from "react";
 import { BsPlus, BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addTodo  }from "../action";
import { updatesearchTerm } from "../action";
import { FilterButtons } from "./FilterButtons";
import { Todolist } from "./Todolist";
  
export const Todo = () => {
    

    const dispatch = useDispatch()
        const [newTodoText,setNewTodoText,] = useState ('');
        const [searchTerm,setsearchTerm,] = useState ('');

        const handleAddToDo = (text) => {
            dispatch(addTodo(text));
        }
       
        const handleAddToDoClick = () => {
            console.log("handle add two buttons");

            
            if(newTodoText.trim() !== ''){
                handleAddToDo(newTodoText.trim());
                setNewTodoText('');
            }
           
        }

    
        const handleSearcChange = (value) => {
        setsearchTerm(value);
        dispatch(updatesearchTerm(value));

        }

  return (
    <div className="max-w-4xl  max-auto sm:mt-6 p-4 bg-gray-500 rounded">
        <h3 className="mt-3 mb-6 text-2xl font-bold text-center uppercase">PERSONAL TODO APP</h3>

        <div className="flex items-center mb-4">
            <input value={newTodoText}  onChange={(e) => setNewTodoText(e.target.value)} type="text" name ="addTodoInput" id="addTodoInput"  placeholder="Add Todo"  
            
            className="flex-grow p-2 border-b-2 border-gray-500 focus:outline-none focus:border-blue-500" 
            />
             <button className="ml-4 p-2 bg-blue-500 text-white rounded
              hover:bg-blue-700 focus: outline-none" onClick={handleAddToDoClick}> <BsPlus  size ={20}/>
             </button>
        </div>

        <div className="flex items-center justify-between">
            
            <FilterButtons/>

            <div className="flex items-center mb-4">
            <input value={searchTerm}  onChange={(e) => handleSearcChange(e.target.value)} type="text" name ="addTodoInput" 
            id="addTodoInput"  placeholder="search"  


            className="flex-grow p-2 border-b-2 border-purple-300 focus:outline-none focus:border-blue-300" />

                <button className="ml-4 p-2 bg-blue-500 text-white rounded
              hover:bg-blue-700 focus: outline-none" > <BsSearch  size ={20}/>
             </button>
               </div>

              
        </div>
        <Todolist/>
        </div>
  )
}
export default Todo; 