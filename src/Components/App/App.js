import React from "react"
import './app.css';

//1.- connect de redux..
import { connect } from 'react-redux';


//importamos todas las actions
import { todosActions } from '../../actions';


// asi importamos un class based component
import {TodoItem} from "../toDoItem"
import NewTodo from "../newTodo"


//Componente con props del store
class App extends React.Component {

  constructor() 
  {
      super()

      //este componente no tiene state, solo coge datos del store (en props) y los pasa al componente toDo Item 
      this.state = {
         
      }
      // bindeamos con la func que va a modificar el state
      this.handleChange = this.handleChange.bind(this)
  }


  handleChange(todo){

    this.props.stTodo(todo);
}


clickDelete(toDo){

  console.log("pulsado delete "+toDo.id)
  // llamamos a la action deleteTodo desde las props
  this.props.deleteTodo(toDo)
}


editTodo(id,text,completed){
  //llamamos action desde props
  this.props.modifyTodo(id, text, completed);

}

addTodo(text, completed){

  this.props.addNewTodo(text,completed)

}
  

  render() {
    // 4.- ya tiene en las props el toDos del store (enlazado desde el connect)
    const todoItems = this.props.todos.map(item => 
    
    <div key={item.id} >

      <TodoItem
        key={item.id}
        item={item}
        alCambiar={(todo) => this.handleChange(todo)}
        alBorrar={(itm) => this.clickDelete(itm)}
        editTodo={(id, text, completed) => this.editTodo(id, text, completed)}
      />

    </div>
    )

    return (
      <div className="todo-list">

        <NewTodo
          addTodo = {(text,checked) => this.addTodo(text,checked)}
        />
        {todoItems}
       
      </div>
    )
  }
}



//2.- pasamos a props los todos del store
const mapStateToProps = state => { 

  console.log("Este es el state:") 
  console.log(state);

  return {todos: state.todos};  
  
};



//2X.- por si queremos separar las actions en lugar de meterlas directamente en el connect...
const mapDispatchToProps = dispatch => {
  return {
    
    deleteTodo: (itm) =>{
      dispatch(todosActions.deleteTodo(itm))
    },
    modifyTodo: (id,text,completed) =>{
      dispatch(todosActions.modifyTodo(id,text,completed))
    },
    addNewTodo: (text,checked) =>{
      dispatch(todosActions.addTodo(text,checked))
    },
    stTodo: (todo) =>{
      dispatch(todosActions.strikeThroughTodo(todo))
    }
  };
}



// 3.- connect de store, actions y componente
export default connect(mapStateToProps,mapDispatchToProps)(App);
  
