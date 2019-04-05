export const modifyTodo = todo => {
    console.log("Action new todo called");
    return {
      // Devuelve un un type y la payload que es un objeto tipo song
      type: 'MODIFY_TODO',
    // toDo a modificar
      payload: todo
    };
  };
  