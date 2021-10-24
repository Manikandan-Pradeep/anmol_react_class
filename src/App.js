import React, { Component } from 'react';
import './App.css';
import Child from './Child' 
import PureChild from './PureChild' 
import ChildFunction from './ChildFunction' 
class App extends Component {

  constructor() {
    super()
    this.state = {
      name: ''
    }
  }

  changeState = () => {
    this.setState({
      // name: this.state.name + 'A'
      name: this.state.name
    })
  }

  render = () => {
    return (
        <div className='container'>
          <Child childName={this.state.name} />
          <PureChild childName={this.state.name}/>
          <ChildFunction childName={this.state.name}/>
          <button onClick={this.changeState}>Change State</button>
        </div>
    )
  }
}

export default App;