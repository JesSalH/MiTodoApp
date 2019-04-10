import toDosData from '../fakeData'
import ITodo from '../interfaces';
import { AnyAction, Reducer } from 'redux';

const reducer = (oldTodosArray = toDosData, action:AnyAction) => {

    switch (action.type){

        case 'ADD_TODO' :
            return [...oldTodosArray, action.payload]

        case 'DELETE_TODO' :
            return oldTodosArray.filter(todo => todo.id !== action.payload.id)

        case 'MODIFY_TODO' :
            //1 quitamos el todo que vamos a meter modificado
            let listWithoutModifiedTodo = oldTodosArray.filter(todo => todo.id !== action.payload.id)
            // 2 anadimos el todo que nos viene de la action
            return [...listWithoutModifiedTodo, action.payload]

        case 'STRIKETHROUGH_TODO':
            const updatedTodos = oldTodosArray.map(todo => {
                // si es el que hemos clicado cambiamos completed
                if (todo.id === action.payload.id) {
                    todo.completed = !todo.completed
                }
                // devolvemos todos los elementos del array
                return todo
            })
            return updatedTodos

        default:
            return oldTodosArray;

    }
}

export default reducer;