import { useSelector } from "react-redux";
import {Todoitem } from "./Todoitem";



export const Todolist = () => {
  const filterTodos = useSelector((state) => {
    const todos = state.todos;
    const filter = state.filter;
    const searchTerm = state.searchTerm.toLowerCase();

    return todos.filter((todo) => {
      console.log("tod0 ",  todo.text);
       //const matchsFilter = (filter == 'COMPLETED' && todo.text.completed) || (filter == 'INCOMPLETE' &&  !todo.text.completed) || (filter == 'ALL');
       //const matchsSearch = todo.text.text.toLowerCase().includes(searchTerm);

       //return matchsFilter && matchsSearch
      return todo

    })
  })

  console.log('Filtered Todos: ', filterTodos);
  // console.log(todo);








  
  return (
    <ul>
      <li className="my-2 text-sm italic">All your notes Here... </li>
      {
        filterTodos.map((todo, index) => (
         //<li key={index}  > {todos.text.text}</li>
         //  <Todoitem key={index} todo={todo} index={index} />
            <Todoitem key ={index} todo={todo} index={index}/>

        ))
      }


    </ul>
  )
}

export default Todolist;