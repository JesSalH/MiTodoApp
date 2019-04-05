export const addTodo = todo => {
    console.log("Action new todo called");
    return {
      // Devuelve un un type y la payload que es un objeto tipo song
      type: 'ADD_TODO',
    // toDo a crear
      payload: todo
    };
  };
  