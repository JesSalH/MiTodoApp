import React from "react"
import ITodo from '../../interfaces';

export class TodoItem extends React.Component  {

    public state = {
        editModalVisible: false,
        text:'',
        completed:false,
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
                    onChange={() => this.props.alCambiar(this.props.item)}       
                />  
                <p style={this.props.item.completed ? completedStyle: null}>La tarea es: {this.props.item.text}</p>
                <button 
                    onClick={() => this.props.alBorrar(this.props.item)}   
                    type="button">Delete
                </button>
                   
                {/* ----------------- modal edit ------------ */}
                
                    <div className="edit-todo">
        
                        {/*  Trigger/Open The Modal  */}
                        <button id="myBtn"
                            onClick = {()=>this.setState({modalVisible: true})}
                        >Edit Item</button>

                        {/*  The Modal  */}
                        {this.state.modalVisible ? <div id="myModal" className="modal">

                        {/*  Modal content */}
                        <div className="modal-content">
                            <span 
                                className="close"
                                onClick = {()=>this.setState({modalVisible: false})}
                                >&times;
                            </span>

                            <p>Edit Todo</p>

                            <input 
                                type="text" 
                                title="label" 
                                value={ this.state.text } 
                                onChange={(event) => { this.setState({ text: event.target.value }); }}>
                            </input>

                            <input 
                                type="checkbox" 
                                title="completed"
                                checked={this.state.completed}
                                onChange={event => this.setState({ completed: event.target.checked })}>
                            </input>

                            <button 
                                id="myBtnEditTodo"
                                onClick = {()=> {
                                    this.props.editTodo(this.props.item.id,this.state.text,this.state.completed);                                    
                                    this.setState({modalVisible: false});
                                }}
                                    >Apply Changes
                            </button>

                        </div>

                    </div>: null }


                </div>
                {/* ---------------------------------------------- */}
                   
            </div>
        )

    }
}

