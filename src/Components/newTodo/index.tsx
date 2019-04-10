import React from "react"


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
    
    
   public render(){
        return (            
            <div className="new-todo">
    
            {/*  Trigger/Open The Modal */}
             <button id="myBtn"
                 onClick = {()=>this.setState({modalVisible: true})}
             >Add Item</button>

             {/*  The Modal */}
             {this.state.modalVisible ? <div id="myModal" className="modal">

                 {/*  Modal content */}
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
                        onClick = {()=> {
                            this.props.addTodo(this.state.text,this.state.completed);                                    
                            this.setState({modalVisible: false});
                        }}
                            >Add Todo
                    </button>

                 </div>

             </div>: null }
     </div>

        );
    }
}

export default NewTodo