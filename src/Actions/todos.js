export const addTodo = (text,checked) => {
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
  


  export const deleteTodo = todo => {
    console.log("Action delete todo called");
    return {
      // Devuelve un un type y la payload que es un objeto tipo song
      type: 'DELETE_TODO',
      // todo a Borrar
      payload: todo
    };
  };
  

  export const modifyTodo = todo => {
    console.log("Action new todo called");
    return {
      // Devuelve un un type y la payload que es un objeto tipo song
      type: 'MODIFY_TODO',
    // toDo a modificar
      payload: todo
    };
  };
  

  //exportamos todas las actions
  export default { addTodo, deleteTodo, modifyTodo };