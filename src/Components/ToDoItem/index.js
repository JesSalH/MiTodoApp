import React from "react"



// importamos actions
// import { AddTodo } from '../../actions/AddTodo';
// import { ModifyTodo } from '../../actions/ModifyTodo.js';
// import { DeleteTodo } from '../../actions/DeleteTodo.js';

export class TodoItem extends React.Component  {

    componentDidMount(){

        // console.log("montado");
        // console.log(this.props);
    }

    render()
    {

        const completedStyle = {
            fontStyle: "italic",
            color: "#cdcdcd",
            textDecoration: "line-through"
        }
        
        return (
            <div className="todo-item">
    
                <input 
                    type="checkbox" 
                    checked={this.props.item.completed}
                    onChange={() => this.props.alCambiar(this.props.item.id)}       
                />  
                <p style={this.props.item.completed ? completedStyle: null}>La tarea es: {this.props.item.text}</p>
                <button 
                    onClick={() => this.props.alBorrar(this.props.item.id)}   
                    type="button">Deleter
                </button>
    
                <button
                     onClick={() => this.props.alEditar(this.props.item.id)}   
                    type="button">
                    Edit
                </button>
                   
        </div>
        )

    }
}


export default TodoItem;