import React from "react"

//1.- connect de redux..
import { connect } from 'react-redux';

//la action que vamos a necesitar
import {addTodo} from '../../actions/addTodo'

interface IProps {
    addTodo: (text:string,checked:boolean) => void;
}

interface IState{
    modalVisible: boolean,
    text:string,
    completed:boolean,
}

class NewTodo extends React.Component<IProps,IState>  {

    public state = {
        modalVisible: false,
        text:'',
        completed:false,
    }
    
    componentDidMount(){    
    }

   
    private generateTodo(text: string, checked: boolean) {
        console.log("Reached generateTodo func with text: " + text + " and checkded: " + checked);
        this.setState({ modalVisible: false })

        console.log("props en generateTodo func: " + this.props)

        this.props.addTodo(text, checked);
    }

    // 4.- ya tiene unas props con: todos (store) y addTodo (action)  
   public render(){
        return (            
            <div className="new-todo">
    
            {/* <!-- Trigger/Open The Modal --> */}
             <button id="myBtn"
                 onClick = {()=>this.setState({modalVisible: true})}
             >Add Item</button>

             {/* <!-- The Modal --> */}
             {this.state.modalVisible ? <div id="myModal" className="modal">

                 {/* <!-- Modal content --> */}
                 <div className="modal-content">
                     <span className="close"
                     onClick = {()=>this.setState({modalVisible: false})}
                     >&times;</span>

                     <p>Add New Todo</p>

                     <input 
                        type="text" 
                        title="label" 
                        value={ this.state.text } 
                        onChange={(event) => { this.setState({ text: event.target.value }); }}>
                    </input>

                    <input 
                        type="checkbox" 
                        title="completed"
                        checked={this.state.completed!}
                        onChange={event => this.setState({ completed: event.target.checked })}>
                    </input>

                     <button 
                        id="myBtnAddTodo"
                        onClick = {()=>this.generateTodo(this.state.text,this.state.completed)}
                            >Add Todo
                    </button>

                 </div>

             </div>: null }

            
       
     </div>

        );
    }
}


//export default NewTodo;


//2.- el map que pasa a estado el data de la app
// no hace falta state porque en este componente no se vuelcan datos
const mapStateToProps = (state:any) => { 
    console.log("Este es el state:") 
    console.log(state);
    return {todos: state.todos};  
  };
  
  
  
//2X.- por si queremos separar las actions en lugar de meterlas directamente en el connect...
const mapDispatchToProps = (dispatch:any) => {
    return {
        addTodo: (itm:any) => {
            dispatch(addTodo(itm))
        }
    };
};

//3.- Connect componente store y action
export default connect(mapStateToProps,mapDispatchToProps)(NewTodo);