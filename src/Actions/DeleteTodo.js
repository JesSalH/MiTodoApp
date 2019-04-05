export const deleteTodo = todo => {
    console.log("Action delete todo called");
    return {
      // Devuelve un un type y la payload que es un objeto tipo song
      type: 'DELETE_TODO',
      // todo a Borrar
      payload: todo
    };
  };
  