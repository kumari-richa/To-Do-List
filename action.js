import { ADD_TODO, FILTER_TODOS, MARK_ALL_COMPLETED, MARK_COMPLETED, MARK_INCOMPLETED, REMOVE_TODO,
     TOOGLE_TODO, UPDATE_SERACH_TERM } from "./Redux/ActionTypes";



export const  addTodo = (text) =>({

    type : ADD_TODO,
    payload :{text}
});


export const  toggleTodo = (id) =>({

    type : TOOGLE_TODO,
    payload :{id}
});
export const  removeTodo = (id) => ({

    type : REMOVE_TODO,
    payload :{id}
});

export const  markcompleted = (id) =>({

    type : MARK_COMPLETED,
    payload :{id}
});
export const  markincomplete = (id) =>({

    type : MARK_INCOMPLETED,
    payload :{id}
});
export const  filtertodo= (filter) =>({

    type : FILTER_TODOS,
    payload :{filter}
});
export const  markallcomleted = () =>({

    type : MARK_ALL_COMPLETED,
    
});
export  const  updatesearchTerm = (searchTerm) =>({

    type : UPDATE_SERACH_TERM,
    payload :{searchTerm}
});