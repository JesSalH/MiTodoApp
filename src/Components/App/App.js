import React from "react"
import './app.css';

//1.- connect de redux..
import { connect } from 'react-redux';

// importamos actions
import {deleteTodo} from '../../actions/deleteTodo';
import {modifyTodo} from '../../actions/modifyTodo'
//import {addTodo} from '../../actions/addTodo'

// asi importamos un class based component
import {TodoItem} from "../toDoItem"
import NewTodo from "../newTodo"

//array de datos de prueba
//no se usan porque los cogemos directamente del store
//import todosData from "../../fakeData"


//-----------------------------------------------------------------------------
//Ojo que este componente lleva ya un objeto props con toda la info del store
class App extends React.Component {

  constructor() 
  {
      super()

      //este componente no tiene state, solo coge datos del store (en props) y los pasa al componente toDo Item 
      this.state = {
          // guardamos el array de datos en todos
          //todos: todosData
          //no funciona
          //todos: this.props.todos
          //modalVisible: false
          // editModalVisible: false
      }
      // bindeamos con la func que va a modificar el state
      this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id){

    console.log("Llamado handleChange desde la id "+id)

    //creo que para el tachado habria que crear un action y un reducer nuevos
    //Action --> devuelve este toDo
    //reducer --> le cambia el checked a este todo y deja los demas igual

    //esto no funciona porque ya no tenemos state, ahora tenemos que modificar directamente el store con actions
    // modificicamos el state basandonos en el state previo
    /*
    this.setState(prevState => {

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
      
    }
    )*/
}


clickDelete(toDo){
  console.log("pulsado delete "+toDo.id)
  console.log("Esto es props.todos (lanzado desde delete): "+this.props.todos)
  this.props.deleteTodo(toDo)
}


editTodo(id,text,completed){
  console.log("alcanzado edit to do con valores: ")
  console.log("id: "+id)
  console.log("text: "+text)
  console.log("completed: "+completed)

  this.props.modifyTodo(id, text, completed);

}
  
  render() 
  {
      // Transformamos el array de datos en un array de TodoItems (checkboxes) relleno
      // 4.- ya tiene unas props con el toDos del store (enlazado desde el connect)
      const todoItems = this.props.todos.map(item => <div  key={item.id} >

                                                        <TodoItem 
                                                          key={item.id} 
                                                          item={item}
                                                          alCambiar={(id)=>this.handleChange(id)}
                                                          alBorrar={(itm)=>this.clickDelete(itm)}                                                                                                                  
                                                          editTodo={(id,text,completed)=>this.editTodo(id,text,completed)}                                                                                                                                                                       
                                                        />

                                                      </div>
                                                      )
    
      return (
          <div className="todo-list">
               <NewTodo/>
              {todoItems}
              <br/> 
          </div>
      )    
  }
}



//2.- el map que pasa a estado el data de la app
const mapStateToProps = state => { 

  console.log("Este es el state:") 
  console.log(state);

  return {todos: state.todos};  
  
};



//2X.- por si queremos separar las actions en lugar de meterlas directamente en el connect...
const mapDispatchToProps = dispatch => {
  return {
    
    deleteTodo: (itm) =>{
      dispatch(deleteTodo(itm))
    },
    modifyTodo: (itm) =>{
      dispatch(modifyTodo(itm))
    }
  };
}



//   3.- connect componente y datos del store
// export default connect(mapStateToProps,
  //  {addTodo:addTodo,deleteTodo:deleteTodo})(App);

export default connect(mapStateToProps,mapDispatchToProps)(App);
  
