import React from "react"

//1.- connect de redux..
import { connect } from 'react-redux';


// importamos actions
import { AddTodo } from '../../Actions/AddTodo';
import { ModifyTodo } from '../../Actions/ModifyTodo.js';
import { DeleteTodo } from '../../Actions/DeleteTodo.js';

export class TodoItem extends React.Component {

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

//2.- el map que pasa a estado el data de la app
const mapStateToProps = state => {

    console.log("This is the state");
    console.log(state);
    return state;
    //return { song: state.selectedSong };
  };



//   3.- connect componente y datos del store
export default connect(mapStateToProps)(TodoItem);