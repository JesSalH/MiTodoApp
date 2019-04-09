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
  
