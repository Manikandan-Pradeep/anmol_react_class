import React, { Component } from 'react';
import './App.css';
import Child from './Child'

class App extends Component {

  renderChild() {
    return (
      <div>
        This is from render prop
      </div>
    )
  }

  render = () => {
    return (
        <div className="appContainer">
          <div className="child">
            <Child renderThis={this.renderChild}/>
          </div>
        </div>
    )
  }
}

export default App;