import React, { Component } from 'react'

class AppClass extends Component {
    constructor(props){
        super(props);
        this.state={
            count:0,
        };
    }

    Increment= () =>{
        this.setState((prevState) => ({count: prevState.count + 1 }))
    }
    Decrement = () =>{
        this.setState((prevState) => ({count: prevState.count - 1}))
    }
    Reset = () =>{
        this.setState((prevState) => ({count: prevState.count = 0}))
    }

  render() {
    const {count} = this.state
    return (
      <div>
        <h1>Counter App</h1>
      <h3>{count}</h3>
      <div className="card">
        <button className='Button btn1' onClick={this.Increment}>+</button>
        <button className='Button btn2' onClick={this.Decrement}>-</button>
        <button className='Button btn3' onClick={this.Reset}>Reset</button>
        </div>
      </div>
    )
  }
}

export default AppClass
