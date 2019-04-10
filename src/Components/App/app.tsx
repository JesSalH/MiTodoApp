import React from "react"
import './app.css';

//1.- connect de redux..
import { connect } from 'react-redux';

//importamos todas las actions
import { todosActions } from '../../actions';


//class based components
import TodoItem from "../toDoItem"
import NewTodo from "../newTodo"

import ITodo from '../../interfaces';
import { NumericDictionary } from "lodash";


//interface con todos los elementos que podra tener el componente
interface IProps {
  //array todos todo con formato array de ITodos
  todos: ITodo[];
  //funcion -> reciben un objeto todo (formato Itodo) y devuelven void
  addTodo: (todo: ITodo) => void;
  removeTodo: (todo: ITodo) => void;
  editTodo: (todo: ITodo) => void;
  deleteTodo: (todo: ITodo) => void;
  modifyTodo: (id:number,text:string,completed:boolean) => void;
  addNewTodo: (text:string,completed:boolean) => void;
  stTodo: (todo: ITodo) => void;

}

//Componente con props del store
class App extends React.Component<IProps, any> {


handleChange(todo:ITodo){

    this.props.stTodo(todo);
}


clickDelete(toDo:ITodo){

  console.log("pulsado delete "+toDo.id)
  // llamamos a la action deleteTodo desde las props
  this.props.deleteTodo(toDo)
}


editTodo(id:number,text:string,completed:boolean){
  //llamamos action desde props
  this.props.modifyTodo(id, text, completed);

}

addTodo(text:string, completed:boolean){

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
const mapStateToProps = (state:any) => { 

  console.log("Este es el state:") 
  console.log(state);

  return {todos: state.todos};  
  
};



//2X.- por si queremos separar las actions en lugar de meterlas directamente en el connect...
const mapDispatchToProps = (dispatch:any) => {
  return {
    
    deleteTodo: (itm:ITodo) =>{
      dispatch(todosActions.deleteTodo(itm))
    },
    modifyTodo: (id:number,text:string,completed:boolean) =>{
      dispatch(todosActions.modifyTodo(id,text,completed))
    },
    addNewTodo: (text:string,checked:boolean) =>{
      dispatch(todosActions.addTodo(text,checked))
    },
    stTodo: (todo:ITodo) =>{
      dispatch(todosActions.strikeThroughTodo(todo))
    }
  };
}


// 3.- connect de store, actions y componente
export default connect(mapStateToProps,mapDispatchToProps)(App);
  
