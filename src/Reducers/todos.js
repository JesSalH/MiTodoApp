import toDosData from '../fakeData'


//(aqui habia) reducer devuelve todos el array de todos

  
// reducer que borra un toDo
const reducer = (oldTodosArray = toDosData, action) => {

    if (action.type === 'ADD_TODO') {
        //   devolvemos un nuevo array con los elementos del antiguo array (separados) y el nuevo toDo
        // Ojo, no usar oldTodosArray.push, se debe devolver un array nuevo 
        return [...oldTodosArray, action.payload]

    } else if (action.type === 'DELETE_TODO') {
        // devolvemos la lista menos el elemento que nos ha pasado la action.
        return oldTodosArray.filter(todo => todo.id !== action.payload.id)

    } else if (action.type === 'MODIFY_TODO') {
        //1 quitamos el todo que vamos a meter modificado
        let listWithoutModifiedTodo = oldTodosArray.filter(todo => todo.id !== action.payload.id)
        // 2 anadimos el todo que nos viene de la action
        return [...listWithoutModifiedTodo, action.payload]
    }

    // si la action no es para este reducer, devuelve el array de todos original
    return oldTodosArray;
};

export default reducer;