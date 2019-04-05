import React from "react"
import './App.css';

//1.- connect de redux..
import { connect } from 'react-redux';

// importamos action de borrar toDo (las action no se pueden usar directamente)
//import {deleteTodo} from '../../Actions/DeleteTodo'

// asi importamos un export class
import {TodoItem} from "../ToDoItem"

//array de datos de prueba
import todosData from "../../fakeData"

class App extends React.Component {

  constructor() 
  {
      super()
      // 
      this.state = {
          // guardamos el array de datos en todos
          todos: todosData
      }
      // bindeamos con la func que va a modificar el state
      this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id){
    console.log("Llamado handleChange desde la id "+id)

    // modificicamos el state basandonos en el state previo
    this.setState(prevState => {

      // mapeamos cada elemento del array
      const updatedTodos = prevState.todos.map(todo => {

          // si es el que hemos clicado cambiamos completed
          if (todo.id === id) {
              todo.completed = !todo.completed
          }
          // devolvemos todos los elementos
          return todo
      })

     
      return {
          // ahora todos (prop del state) sera el nuevo array mapeado
          todos: updatedTodos
      }
  })
}


clickDelete(id){
  console.log("pulsado delete "+id)
}

clickEdit(id){
  console.log("pulsado edit de "+id)
}
  
  render() 
  {
      // Transformamos el array de datos en un array de TodoItems (checkboxes) relleno
      const todoItems = this.props.todos.map(item => <TodoItem 
                                                        key={item.id} 
                                                        item={item}
                                                        alCambiar={this.handleChange}
                                                        alBorrar={this.clickDelete}  
                                                        alEditar={this.clickEdit}                                                                                                                                                                     
                                                      />)
      
      return (
          <div className="todo-list">
              {todoItems}
          </div>
      )    
  }
}



//2.- el map que pasa a estado el data de la app
const mapStateToProps = state => {  
  console.log(state);
  return {todos: state.todos};
  //return { song: state.selectedSong };
};



//   3.- connect componente y datos del store
export default connect(mapStateToProps)(App);
