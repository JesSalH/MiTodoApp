export const modifyTodo = (idP, textP, completedP) => {
    console.log("Action new todo reached");
    console.log("values received: ");
    console.log("id: "+idP);
    console.log("text: "+textP);
    console.log("completed: "+completedP);

    let todo = {
      id: 400,
      text: "metido directamente",
      completed: true
    }

    return {
      // Devuelve un un type y la payload que es un objeto tipo song
      type: 'MODIFY_TODO',
    // toDo a modificar
      payload: todo
    };
};
  