import React from "react"


export class NewTodo extends React.Component  {

    constructor() 
  {
      super()

      //este componente no tiene state, solo coge datos del store (en props) y los pasa al componente toDo Item 
      this.state = {

          modalVisible: false
          
      }
      
  }

    componentDidMount(){    
    }

    render()
    {
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
                            <p>Some text in the Modal..</p>
                        </div>

                    </div>: null }
              
            </div>
        )

    }
}


export default NewTodo;