import React from "react"



// importamos actions
// import { AddTodo } from '../../actions/addTodo';
// import { ModifyTodo } from '../../actions/modifyTodo.js';
// import { DeleteTodo } from '../../actions/deleteTodo.js';

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
                    onClick={() => this.props.alBorrar(this.props.item)}   
                    type="button">Deletee
                </button>
    
                <button
                     onClick={() => this.props.alEditar(this.props.item.id)}   
                    type="button">
                    Edit
                </button>

                <button
                     onClick={() => this.props.alDuplicar()}   
                    type="button">
                    Duplicate
                </button>
                   
            </div>
        )

    }
}


//export default TodoItem;