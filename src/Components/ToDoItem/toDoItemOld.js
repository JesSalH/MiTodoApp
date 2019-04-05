import React from "react"

//1.- connect de redux..
import { connect } from 'react-redux';


// importamos actions
import { AddTodo } from '../../Actions/AddTodo';
import { ModifyTodo } from '../../Actions/ModifyTodo.js';
import { DeleteTodo } from '../../Actions/DeleteTodo.js';

function TodoItem(props) {

    // estilo cuando se marca un checkbox
    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }
    
    return (
        <div className="todo-item">

            <input 
                type="checkbox" 
                checked={props.item.completed}
                onChange={() => props.alCambiar(props.item.id)}       
            />  
            <p style={props.item.completed ? completedStyle: null}>Task: {props.item.text}</p>
            <button 
                onClick={() => props.alBorrar(props.item.id)}   
                type="button">Delete
            </button>

            <button
                onClick={() => props.alEditar(props.item.id)}   
                type="button">
                Edit
                </button>
               
    </div>
    )
}

export default TodoItem


// 4.- Connect: ahora el todoItem puede usar lo del mapToState como props
// export default connect(
//     mapStateToProps,
//     // selectSong es un metodo llamado al darle al boton
//     { selectSong }
//     //de param 2 le pasamos tb el componente lista de canciones
//   )(SongList);