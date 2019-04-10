import ITodo from '../interfaces';
 
 const addTodo = (text:string,checked:boolean) => {
    console.log("Action new todo called");
    
    let rdId = Math.round(Math.floor((Math.random() * 50000) + 1));
    console.log("id autogenerada: "+rdId)

    let todo = {
      text: text,
      completed: checked,
      id: rdId, 
    }
    
    return {
      // Devuelve un un type y la payload que es un objeto tipo song
      type: 'ADD_TODO',
    // toDo a crear
      payload: todo
    };
  };
  


  const deleteTodo = (todo:ITodo) => {
    console.log("Action delete todo called");
    return {
      // Devuelve un un type y la payload que es un objeto tipo song
      type: 'DELETE_TODO',
      // todo a Borrar
      payload: todo
    };
  };
  

   const modifyTodo = (id:number, text:string, completed:boolean) => {
    
    let todo = {
      id: id,
      text: text,
      completed: completed
    }

    return {
      // Devuelve un un type y la payload que es un objeto tipo song
      type: 'MODIFY_TODO',
    // toDo a modificar
      payload: todo
    };
};


const strikeThroughTodo = (todo:ITodo) => {
  console.log("Action strikeTrhough called");
  return {
    // Devuelve un un type y la payload que es un objeto tipo song
    type: 'STRIKETHROUGH_TODO',
    // todo a Borrar
    payload: todo
  };
};

  const allTodoActions = { addTodo, deleteTodo, modifyTodo, strikeThroughTodo };
  export default allTodoActions